const platformIdFinder = platform => {
  switch (platform) {
    case "pc":
      return "6"

    case "playstation4":
      return "48"

    case "nintendo":
      return "130"

    case "xbox":
      return "49"

    case "etc":
      break
    default:
      platform = "No Match"

      return undefined
  }
}

export default platformIdFinder
