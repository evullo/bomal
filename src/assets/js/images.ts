const imagePromises: Promise<{ default: string }>[] = []
for (let i = 1; i <= 40; i++) {
  imagePromises.push(import(`@/assets/images/gallery/IMG_${i.toString().padStart(4, '0')}.jpg`))
}

export default await Promise.all(imagePromises).then((modules) =>
  modules.map((module) => module.default)
)
