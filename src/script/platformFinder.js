const platformIdFinder = platform => {
  switch (platform) {
    case "pc":
      console.log("PC IS DETECTED")
      return "6"

    case "playstation4":
      console.log("PS4 IS DETECTED")
      return "48"

    case "nintendo":
      console.log("Nintendo IS DETECTED")
      return "130"

    case "xbox":
      console.log("Xbox IS DETECTED")
      return "12"

    case "etc":
      console.log("ETC IS DETECTED")
      break
    default:
      platform = "No Match"
      console.log("No Match man")
      return undefined
  }
}

export default platformIdFinder
