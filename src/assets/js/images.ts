async function loadImages() {
  const imagePromises: Promise<{ default: string }>[] = []
  for (let i = 1; i <= 40; i++) {
    imagePromises.push(import(`@/assets/images/gallery/IMG_${i.toString().padStart(4, '0')}.jpg`))
  }

  const modules = await Promise.all(imagePromises)
  return modules.map((module) => module.default)
}

export default loadImages
