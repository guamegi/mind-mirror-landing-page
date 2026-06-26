import AppKit

struct LocaleCopy {
  let lang: String
  let badge: String
  let title: String
  let subtitle: String
  let chip1: String
  let chip2: String
  let month: String
  let weekdays: [String]
  let diaryTitle: String
  let diaryBody: String
  let aiCta: String
}

let fileManager = FileManager.default
let rootURL = URL(fileURLWithPath: fileManager.currentDirectoryPath)
let imagesURL = rootURL.appendingPathComponent("public/images")

let locales: [LocaleCopy] = [
  LocaleCopy(
    lang: "ko",
    badge: "AI 감정 일기",
    title: "당신의 감정을\nAI로 이해하다",
    subtitle: "매일의 일기를 쓰면 AI가 감정을 분석하고 마음의 패턴을 보여줍니다.",
    chip1: "7가지 감정",
    chip2: "iOS & Android",
    month: "2026년 6월",
    weekdays: ["일", "월", "화", "수", "목", "금", "토"],
    diaryTitle: "기술적 난관 해결과 성취감",
    diaryBody: "연결 문제를 해결했다. 작은 진전이 오늘의 기분을 바꿨다.",
    aiCta: "AI 분석 보기"
  ),
  LocaleCopy(
    lang: "en",
    badge: "AI emotion diary",
    title: "Understand your\nemotions with AI",
    subtitle: "Write a daily diary and let AI reveal your mood patterns and insights.",
    chip1: "7 emotion types",
    chip2: "iOS & Android",
    month: "June 2026",
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    diaryTitle: "Solved a tough technical issue",
    diaryBody: "A small breakthrough changed the mood of the day.",
    aiCta: "View AI analysis"
  ),
  LocaleCopy(
    lang: "ja",
    badge: "AI感情日記",
    title: "気持ちを\nAIで理解する",
    subtitle: "毎日の日記から感情パターンと心のインサイトを見つけます。",
    chip1: "7種類の感情",
    chip2: "iOS・Android",
    month: "2026年6月",
    weekdays: ["日", "月", "火", "水", "木", "金", "土"],
    diaryTitle: "技術的な問題を解決",
    diaryBody: "小さな前進が今日の気分を明るくしてくれた。",
    aiCta: "AI分析を見る"
  ),
  LocaleCopy(
    lang: "zh",
    badge: "AI情绪日记",
    title: "用 AI 理解\n你的情绪",
    subtitle: "记录每日心情，让 AI 发现情绪模式并提供洞察。",
    chip1: "7种情绪",
    chip2: "iOS 与 Android",
    month: "2026年6月",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    diaryTitle: "解决了技术难题",
    diaryBody: "一个小突破，让今天的心情变得更轻松。",
    aiCta: "查看 AI 分析"
  ),
]

func color(_ red: CGFloat, _ green: CGFloat, _ blue: CGFloat, _ alpha: CGFloat = 1) -> NSColor {
  NSColor(calibratedRed: red / 255, green: green / 255, blue: blue / 255, alpha: alpha)
}

func roundedRect(_ rect: CGRect, radius: CGFloat, fill: NSColor, stroke: NSColor? = nil, lineWidth: CGFloat = 1) {
  let path = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
  fill.setFill()
  path.fill()
  if let stroke {
    stroke.setStroke()
    path.lineWidth = lineWidth
    path.stroke()
  }
}

func drawText(_ text: String, in rect: CGRect, size: CGFloat, weight: NSFont.Weight, color textColor: NSColor, alignment: NSTextAlignment = .left, lineSpacing: CGFloat = 0) {
  let paragraph = NSMutableParagraphStyle()
  paragraph.alignment = alignment
  paragraph.lineBreakMode = .byWordWrapping
  paragraph.lineSpacing = lineSpacing
  let attrs: [NSAttributedString.Key: Any] = [
    .font: NSFont.systemFont(ofSize: size, weight: weight),
    .foregroundColor: textColor,
    .paragraphStyle: paragraph,
  ]
  NSString(string: text).draw(in: rect, withAttributes: attrs)
}

func drawShadow(color shadowColor: NSColor, blur: CGFloat, offset: CGSize) {
  let shadow = NSShadow()
  shadow.shadowColor = shadowColor
  shadow.shadowBlurRadius = blur
  shadow.shadowOffset = offset
  shadow.set()
}

func drawMoodAsset(named name: String, in rect: CGRect) {
  let url = imagesURL.appendingPathComponent(name)
  if let image = NSImage(contentsOf: url) {
    image.draw(in: rect)
  }
}

func drawMoodBubble(style: String, in rect: CGRect) {
  let s = rect.width / 50
  let fill: NSColor
  switch style {
  case "proud":
    fill = color(255, 217, 128)
  case "calm":
    fill = color(221, 207, 184)
  case "awkward":
    fill = color(171, 216, 211)
  default:
    fill = color(195, 231, 226)
  }

  fill.setFill()
  NSBezierPath(ovalIn: rect).fill()

  color(255, 153, 135, 0.58).setFill()
  NSBezierPath(ovalIn: CGRect(x: rect.minX + 10 * s, y: rect.minY + 20 * s, width: 6 * s, height: 4 * s)).fill()
  NSBezierPath(ovalIn: CGRect(x: rect.maxX - 16 * s, y: rect.minY + 20 * s, width: 6 * s, height: 4 * s)).fill()

  color(31, 35, 45).setStroke()
  if style == "proud" {
    let leftBrow = NSBezierPath()
    leftBrow.move(to: CGPoint(x: rect.minX + 13 * s, y: rect.minY + 34 * s))
    leftBrow.line(to: CGPoint(x: rect.minX + 18 * s, y: rect.minY + 39 * s))
    leftBrow.lineWidth = 1.8 * s
    leftBrow.stroke()
    let rightBrow = NSBezierPath()
    rightBrow.move(to: CGPoint(x: rect.maxX - 18 * s, y: rect.minY + 39 * s))
    rightBrow.line(to: CGPoint(x: rect.maxX - 13 * s, y: rect.minY + 34 * s))
    rightBrow.lineWidth = 1.8 * s
    rightBrow.stroke()
  }

  let leftEye = NSBezierPath()
  leftEye.move(to: CGPoint(x: rect.minX + 13 * s, y: rect.minY + 28 * s))
  leftEye.curve(to: CGPoint(x: rect.minX + 20 * s, y: rect.minY + 28 * s), controlPoint1: CGPoint(x: rect.minX + 15 * s, y: rect.minY + 24 * s), controlPoint2: CGPoint(x: rect.minX + 18 * s, y: rect.minY + 24 * s))
  leftEye.lineWidth = 1.8 * s
  leftEye.stroke()

  let rightEye = NSBezierPath()
  rightEye.move(to: CGPoint(x: rect.maxX - 20 * s, y: rect.minY + 28 * s))
  rightEye.curve(to: CGPoint(x: rect.maxX - 13 * s, y: rect.minY + 28 * s), controlPoint1: CGPoint(x: rect.maxX - 18 * s, y: rect.minY + 24 * s), controlPoint2: CGPoint(x: rect.maxX - 15 * s, y: rect.minY + 24 * s))
  rightEye.lineWidth = 1.8 * s
  rightEye.stroke()

  if style == "awkward" {
    color(31, 35, 45).setFill()
    NSBezierPath(ovalIn: CGRect(x: rect.minX + 15 * s, y: rect.minY + 27 * s, width: 3 * s, height: 3 * s)).fill()
    NSBezierPath(ovalIn: CGRect(x: rect.maxX - 18 * s, y: rect.minY + 27 * s, width: 3 * s, height: 3 * s)).fill()
    let mouth = NSBezierPath()
    mouth.move(to: CGPoint(x: rect.minX + 22 * s, y: rect.minY + 19 * s))
    mouth.line(to: CGPoint(x: rect.minX + 28 * s, y: rect.minY + 19 * s))
    mouth.lineWidth = 1.4 * s
    mouth.stroke()
    color(245, 252, 255, 0.78).setFill()
    NSBezierPath(ovalIn: CGRect(x: rect.maxX - 13 * s, y: rect.minY + 33 * s, width: 4 * s, height: 8 * s)).fill()
  } else {
    let mouth = NSBezierPath()
    mouth.move(to: CGPoint(x: rect.minX + 22 * s, y: rect.minY + 18 * s))
    mouth.curve(to: CGPoint(x: rect.minX + 28 * s, y: rect.minY + 18 * s), controlPoint1: CGPoint(x: rect.minX + 23 * s, y: rect.minY + 15 * s), controlPoint2: CGPoint(x: rect.minX + 27 * s, y: rect.minY + 15 * s))
    mouth.lineWidth = 1.8 * s
    mouth.stroke()
  }
}

func writePNG(_ image: NSImage, to url: URL) throws {
  guard let tiffData = image.tiffRepresentation,
        let rep = NSBitmapImageRep(data: tiffData),
        let pngData = rep.representation(using: .png, properties: [:]) else {
    throw NSError(domain: "MindMirrorImageGen", code: 1, userInfo: [NSLocalizedDescriptionKey: "Failed to create PNG data"])
  }
  try fileManager.createDirectory(at: url.deletingLastPathComponent(), withIntermediateDirectories: true)
  try pngData.write(to: url)
}

func makeImage(size: CGSize, draw: () -> Void) -> NSImage {
  let image = NSImage(size: size)
  image.lockFocus()
  draw()
  image.unlockFocus()
  return image
}

func drawPhonePreview(copy: LocaleCopy, in rect: CGRect, scale: CGFloat = 1) {
  NSGraphicsContext.current?.saveGraphicsState()
  let clip = NSBezierPath(roundedRect: rect, xRadius: 36 * scale, yRadius: 36 * scale)
  clip.addClip()

  color(248, 249, 252).setFill()
  rect.fill()

  let x = rect.origin.x
  let y = rect.origin.y
  let w = rect.width
  let h = rect.height
  let s = w / 540

  drawText("m", in: CGRect(x: x + 30 * s, y: y + h - 84 * s, width: 60 * s, height: 48 * s), size: 42 * s, weight: .heavy, color: color(104, 92, 255))
  color(255, 213, 82).setFill()
  NSBezierPath(ovalIn: CGRect(x: x + 68 * s, y: y + h - 74 * s, width: 7 * s, height: 7 * s)).fill()

  drawText("▣", in: CGRect(x: x + w - 116 * s, y: y + h - 72 * s, width: 36 * s, height: 36 * s), size: 26 * s, weight: .semibold, color: color(31, 34, 49), alignment: .center)
  drawText("▱", in: CGRect(x: x + w - 62 * s, y: y + h - 72 * s, width: 36 * s, height: 36 * s), size: 30 * s, weight: .semibold, color: color(31, 34, 49), alignment: .center)

  drawText("‹", in: CGRect(x: x + 32 * s, y: y + h - 164 * s, width: 34 * s, height: 48 * s), size: 52 * s, weight: .regular, color: color(118, 123, 133), alignment: .center)
  drawText(copy.month, in: CGRect(x: x + 132 * s, y: y + h - 156 * s, width: 276 * s, height: 44 * s), size: 29 * s, weight: .bold, color: color(35, 37, 45), alignment: .center)
  drawText("›", in: CGRect(x: x + w - 68 * s, y: y + h - 164 * s, width: 34 * s, height: 48 * s), size: 52 * s, weight: .regular, color: color(170, 174, 183), alignment: .center)

  let gridX = x + 23 * s
  let gridY = y + h - 612 * s
  let cell = 74 * s
  let dayY = y + h - 222 * s
  for (index, weekday) in copy.weekdays.enumerated() {
    let weekdayColor = index == 0 ? color(255, 65, 72) : index == 6 ? color(32, 141, 255) : color(98, 102, 112)
    drawText(weekday, in: CGRect(x: gridX + CGFloat(index) * cell, y: dayY, width: cell, height: 24 * s), size: 18 * s, weight: .bold, color: weekdayColor, alignment: .center)
  }

  let moodByDay: [Int: String] = [
    1: "mint", 2: "mint", 3: "mint", 4: "mint",
    5: "awkward", 7: "mint", 11: "calm", 12: "mint",
    13: "mint", 14: "mint", 15: "mint", 16: "mint",
    18: "mint", 21: "mint", 22: "mint", 23: "proud",
    24: "proud",
  ]
  let grayDays: Set<Int> = [6, 8, 9, 10, 17, 19, 20, 25, 26, 27, 28, 29, 30]
  for day in 1...30 {
    let offset = day - 1
    let col = offset % 7
    let row = offset / 7
    let cx = gridX + CGFloat(col) * cell + cell / 2
    let cy = gridY + CGFloat(4 - row) * cell + 24 * s

    if day == 24 {
      roundedRect(CGRect(x: cx - 34 * s, y: cy - 8 * s, width: 68 * s, height: 24 * s), radius: 12 * s, fill: color(110, 92, 255))
      drawText("24", in: CGRect(x: cx - 30 * s, y: cy - 6 * s, width: 60 * s, height: 22 * s), size: 18 * s, weight: .heavy, color: .white, alignment: .center)
      continue
    }

    if let style = moodByDay[day] {
      drawMoodBubble(style: style, in: CGRect(x: cx - 25 * s, y: cy + 16 * s, width: 50 * s, height: 50 * s))
    } else if grayDays.contains(day) {
      color(215, 217, 222).setFill()
      NSBezierPath(ovalIn: CGRect(x: cx - 25 * s, y: cy + 16 * s, width: 50 * s, height: 50 * s)).fill()
    }

    let isSunday = col == 0
    let isSaturday = col == 6
    let dayColor = isSunday ? color(255, 65, 72) : isSaturday ? color(32, 141, 255) : color(102, 106, 116)
    drawText("\(day)", in: CGRect(x: cx - 24 * s, y: cy - 10 * s, width: 48 * s, height: 22 * s), size: 18 * s, weight: .bold, color: dayColor, alignment: .center)
  }

  NSGraphicsContext.current?.saveGraphicsState()
  drawShadow(color: color(40, 46, 70, 0.12), blur: 22 * s, offset: CGSize(width: 0, height: -8 * s))
  roundedRect(CGRect(x: x + 20 * s, y: y + 206 * s, width: w - 40 * s, height: 176 * s), radius: 24 * s, fill: .white)
  NSGraphicsContext.current?.restoreGraphicsState()
  color(255, 178, 56).setFill()
  CGRect(x: x + 20 * s, y: y + 206 * s, width: 6 * s, height: 176 * s).fill()
  color(247, 241, 231).setFill()
  CGRect(x: x + 26 * s, y: y + 206 * s, width: 76 * s, height: 176 * s).fill()
  drawText("24", in: CGRect(x: x + 36 * s, y: y + 302 * s, width: 56 * s, height: 42 * s), size: 34 * s, weight: .heavy, color: color(30, 34, 52), alignment: .center)
  drawText(copy.weekdays[3], in: CGRect(x: x + 50 * s, y: y + 278 * s, width: 28 * s, height: 20 * s), size: 14 * s, weight: .semibold, color: color(101, 106, 118), alignment: .center)
  drawMoodBubble(style: "proud", in: CGRect(x: x + 46 * s, y: y + 234 * s, width: 34 * s, height: 34 * s))
  drawText(copy.diaryTitle, in: CGRect(x: x + 118 * s, y: y + 326 * s, width: 340 * s, height: 34 * s), size: 18 * s, weight: .bold, color: color(32, 35, 51))
  drawText("•••", in: CGRect(x: x + w - 58 * s, y: y + 326 * s, width: 34 * s, height: 24 * s), size: 20 * s, weight: .bold, color: color(126, 130, 142), alignment: .center)
  drawText(copy.diaryBody, in: CGRect(x: x + 118 * s, y: y + 274 * s, width: 370 * s, height: 42 * s), size: 15 * s, weight: .regular, color: color(133, 139, 153), lineSpacing: 4 * s)
  color(245, 244, 255).setFill()
  CGRect(x: x + 102 * s, y: y + 206 * s, width: w - 122 * s, height: 48 * s).fill()
  drawText("✦ \(copy.aiCta) ›", in: CGRect(x: x + w - 184 * s, y: y + 220 * s, width: 154 * s, height: 22 * s), size: 16 * s, weight: .bold, color: color(111, 94, 255), alignment: .right)

  let navRect = CGRect(x: x + 20 * s, y: y + 30 * s, width: w - 40 * s, height: 82 * s)
  roundedRect(navRect, radius: 22 * s, fill: .white, stroke: color(229, 231, 236))
  drawText("▣", in: CGRect(x: x + 64 * s, y: y + 56 * s, width: 30 * s, height: 28 * s), size: 27 * s, weight: .bold, color: color(105, 91, 255), alignment: .center)
  drawText("▥", in: CGRect(x: x + 164 * s, y: y + 56 * s, width: 30 * s, height: 28 * s), size: 27 * s, weight: .regular, color: color(135, 139, 145), alignment: .center)
  color(105, 91, 255).setFill()
  NSBezierPath(ovalIn: CGRect(x: x + w / 2 - 43 * s, y: y + 40 * s, width: 86 * s, height: 86 * s)).fill()
  drawText("+", in: CGRect(x: x + w / 2 - 24 * s, y: y + 58 * s, width: 48 * s, height: 44 * s), size: 44 * s, weight: .regular, color: .white, alignment: .center)
  drawText("▤", in: CGRect(x: x + w - 176 * s, y: y + 56 * s, width: 30 * s, height: 28 * s), size: 27 * s, weight: .regular, color: color(135, 139, 145), alignment: .center)
  drawText("⚙", in: CGRect(x: x + w - 74 * s, y: y + 54 * s, width: 34 * s, height: 34 * s), size: 27 * s, weight: .regular, color: color(135, 139, 145), alignment: .center)

  NSGraphicsContext.current?.restoreGraphicsState()
}

func generatePhoneImage(copy: LocaleCopy) throws {
  let size = CGSize(width: 540, height: 1120)
  let image = makeImage(size: size) {
    drawPhonePreview(copy: copy, in: CGRect(origin: .zero, size: size))
  }
  try writePNG(image, to: imagesURL.appendingPathComponent("phone-calendar-\(copy.lang).png"))
}

func generateOgImage(copy: LocaleCopy) throws {
  let size = CGSize(width: 1200, height: 630)
  let image = makeImage(size: size) {
    guard let context = NSGraphicsContext.current?.cgContext else { return }
    let gradient = CGGradient(
      colorsSpace: CGColorSpaceCreateDeviceRGB(),
      colors: [
        color(252, 247, 243).cgColor,
        color(239, 249, 249).cgColor,
        color(243, 241, 255).cgColor,
      ] as CFArray,
      locations: [0, 0.52, 1]
    )!
    context.drawLinearGradient(gradient, start: CGPoint(x: 0, y: 630), end: CGPoint(x: 1200, y: 0), options: [])

    drawMoodAsset(named: "smile_glow.png", in: CGRect(x: 82, y: 472, width: 68, height: 68))
    drawMoodAsset(named: "tiny_peach.png", in: CGRect(x: 488, y: 86, width: 58, height: 58))
    drawMoodAsset(named: "awkward_teal.png", in: CGRect(x: 1030, y: 470, width: 76, height: 76))

    roundedRect(CGRect(x: 72, y: 474, width: 178, height: 42), radius: 21, fill: color(105, 91, 255, 0.11))
    drawText(copy.badge, in: CGRect(x: 98, y: 486, width: 136, height: 22), size: 17, weight: .bold, color: color(91, 76, 219), alignment: .center)

    drawText("Mind Mirror", in: CGRect(x: 76, y: 406, width: 500, height: 54), size: 47, weight: .heavy, color: color(29, 33, 48))
    drawText(copy.title, in: CGRect(x: 76, y: 272, width: 520, height: 126), size: 48, weight: .heavy, color: color(36, 40, 58), lineSpacing: 4)
    drawText(copy.subtitle, in: CGRect(x: 78, y: 186, width: 500, height: 70), size: 22, weight: .regular, color: color(91, 97, 113), lineSpacing: 5)

    roundedRect(CGRect(x: 78, y: 116, width: 142, height: 40), radius: 20, fill: .white, stroke: color(229, 228, 244))
    roundedRect(CGRect(x: 236, y: 116, width: 154, height: 40), radius: 20, fill: .white, stroke: color(229, 228, 244))
    drawText(copy.chip1, in: CGRect(x: 98, y: 127, width: 102, height: 20), size: 16, weight: .semibold, color: color(57, 62, 78), alignment: .center)
    drawText(copy.chip2, in: CGRect(x: 254, y: 127, width: 116, height: 20), size: 16, weight: .semibold, color: color(57, 62, 78), alignment: .center)

    NSGraphicsContext.current?.saveGraphicsState()
    drawShadow(color: color(54, 62, 95, 0.20), blur: 36, offset: CGSize(width: 0, height: -12))
    roundedRect(CGRect(x: 712, y: 48, width: 316, height: 536), radius: 46, fill: color(31, 34, 46))
    NSGraphicsContext.current?.restoreGraphicsState()
    drawPhonePreview(copy: copy, in: CGRect(x: 728, y: 64, width: 284, height: 504), scale: 0.55)

    roundedRect(CGRect(x: 612, y: 388, width: 166, height: 56), radius: 18, fill: .white, stroke: color(229, 228, 244))
    drawMoodAsset(named: "smile_glow.png", in: CGRect(x: 626, y: 397, width: 38, height: 38))
    drawText(copy.chip1, in: CGRect(x: 674, y: 407, width: 84, height: 24), size: 15, weight: .bold, color: color(47, 51, 68))

    roundedRect(CGRect(x: 948, y: 128, width: 158, height: 54), radius: 18, fill: .white, stroke: color(229, 228, 244))
    drawText("✦", in: CGRect(x: 966, y: 143, width: 26, height: 24), size: 22, weight: .bold, color: color(105, 91, 255), alignment: .center)
    drawText(copy.aiCta, in: CGRect(x: 996, y: 146, width: 92, height: 20), size: 14, weight: .bold, color: color(47, 51, 68))
  }
  let localizedURL = imagesURL.appendingPathComponent("og-image-\(copy.lang).png")
  try writePNG(image, to: localizedURL)
  if copy.lang == "en" {
    try writePNG(image, to: imagesURL.appendingPathComponent("og-image.png"))
  }
}

for locale in locales {
  try generatePhoneImage(copy: locale)
  try generateOgImage(copy: locale)
}

print("Generated localized OG and phone preview images in \(imagesURL.path)")
