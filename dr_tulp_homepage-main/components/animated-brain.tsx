'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import portraitImage from '@/app/assets/dr-tulp-portrait.jpg'

type OrbitControlsType = any

export default function AnimatedBrain() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const importOrbitControls = async () => {
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js')
      init(OrbitControls)
    }

    let controls: OrbitControlsType | null = null
    let renderer: THREE.WebGLRenderer | undefined
    let animationFrameId: number

    const init = (OrbitControls: any) => {
      if (!mountRef.current) return

      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(300, 300)
      mountRef.current.appendChild(renderer.domElement)

      // Create a brain-like shape using spheres
      const brainGeometry = new THREE.SphereGeometry(1, 32, 32)
      const brainMaterial = new THREE.MeshPhongMaterial({
        color: 0xe4b7ff, // Soft purple
        shininess: 100,
        transparent: true,
        opacity: 0.9,
      })
      const brain = new THREE.Mesh(brainGeometry, brainMaterial)
      scene.add(brain)

      // Add Dr. Tulp's portrait as a floating plane
      const textureLoader = new THREE.TextureLoader()
      const portraitTexture = textureLoader.load(portraitImage.src)
      
      const portraitGeometry = new THREE.PlaneGeometry(1.5, 2)
      const portraitMaterial = new THREE.MeshBasicMaterial({
        map: portraitTexture,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      })
      const portrait = new THREE.Mesh(portraitGeometry, portraitMaterial)
      portrait.position.set(-2, 0, 0) // Position to the left of the brain
      scene.add(portrait)

      // Add neural connection lines
      const connectionsMaterial = new THREE.LineBasicMaterial({ color: 0xb388ff })
      for (let i = 0; i < 20; i++) {
        const points: THREE.Vector3[] = []
        const radius = 1.2
        points.push(
          new THREE.Vector3(
            Math.random() * radius - radius/2,
            Math.random() * radius - radius/2,
            Math.random() * radius - radius/2
          )
        )
        points.push(
          new THREE.Vector3(
            Math.random() * radius - radius/2,
            Math.random() * radius - radius/2,
            Math.random() * radius - radius/2
          )
        )
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const line = new THREE.Line(geometry, connectionsMaterial)
        brain.add(line)
      }

      // Add connecting lines between brain and portrait
      const brainToPortraitLines = 5
      for (let i = 0; i < brainToPortraitLines; i++) {
        const points: THREE.Vector3[] = []
        points.push(new THREE.Vector3(-0.5, 0, 0)) // Start from brain
        points.push(new THREE.Vector3(-1.5, 
          Math.random() * 0.5 - 0.25,
          Math.random() * 0.5 - 0.25)) // End near portrait
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const line = new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({ 
            color: 0xb388ff,
            transparent: true,
            opacity: 0.4
          })
        )
        scene.add(line)
      }

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)
      const pointLight = new THREE.PointLight(0xffffff, 1)
      pointLight.position.set(5, 5, 5)
      scene.add(pointLight)

      // Camera position
      camera.position.z = 3.5
      camera.position.x = -1 // Offset camera to show both brain and portrait

      // Controls
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableZoom = false
      controls.enablePan = false
      controls.autoRotate = true
      controls.autoRotateSpeed = 1

      // Animation
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate)
        
        // Gentle floating animation for the portrait
        portrait.position.y = Math.sin(Date.now() * 0.001) * 0.1
        portrait.rotation.y = Math.sin(Date.now() * 0.0005) * 0.1
        
        controls?.update()
        renderer?.render(scene, camera)
      }
      animate()
    }

    importOrbitControls()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      controls?.dispose()
      renderer?.dispose()
      
      if (mountRef.current?.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild)
      }
    }
  }, [])

  return <div ref={mountRef} className="w-[300px] h-[300px] mx-auto" />
}