const platformIdFinder = platform => {
  switch (platform) {
    case "pc":
      return "6"

    case "playstation4":
      return "48"

    case "nintendo":
      return "130"

    case "xbox":
      return "12"

    case "etc":
      break
    default:
      platform = "No Match"
      console.log("No Match man")
      return undefined
  }
}

export default platformIdFinder
