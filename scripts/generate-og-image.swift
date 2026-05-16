import AppKit

let fileManager = FileManager.default
let currentDirectory = fileManager.currentDirectoryPath
let outputURL = URL(fileURLWithPath: currentDirectory).appendingPathComponent("public/images/og-image.png")
let joyURL = URL(fileURLWithPath: currentDirectory).appendingPathComponent("public/images/smile_glow.png")

let size = NSSize(width: 1200, height: 630)
let image = NSImage(size: size)

image.lockFocus()

guard let context = NSGraphicsContext.current?.cgContext else {
  fputs("Failed to get graphics context\n", stderr)
  exit(1)
}

let colors = [
  NSColor(calibratedRed: 0.96, green: 0.88, blue: 0.78, alpha: 1).cgColor,
  NSColor(calibratedRed: 0.93, green: 0.78, blue: 0.87, alpha: 1).cgColor,
  NSColor(calibratedRed: 0.69, green: 0.87, blue: 0.91, alpha: 1).cgColor,
]

let gradient = CGGradient(
  colorsSpace: CGColorSpaceCreateDeviceRGB(),
  colors: colors as CFArray,
  locations: [0.0, 0.45, 1.0]
)!
context.drawLinearGradient(
  gradient,
  start: CGPoint(x: 0, y: 630),
  end: CGPoint(x: 1200, y: 0),
  options: []
)

context.setFillColor(NSColor(calibratedWhite: 1.0, alpha: 0.28).cgColor)
context.fillEllipse(in: CGRect(x: 815, y: 365, width: 280, height: 280))
context.setFillColor(NSColor(calibratedWhite: 1.0, alpha: 0.18).cgColor)
context.fillEllipse(in: CGRect(x: 905, y: 70, width: 180, height: 180))
context.setFillColor(NSColor(calibratedWhite: 1.0, alpha: 0.22).cgColor)
context.fillEllipse(in: CGRect(x: 720, y: 105, width: 96, height: 96))

let panelRect = NSBezierPath(roundedRect: NSRect(x: 58, y: 58, width: 1084, height: 514), xRadius: 36, yRadius: 36)
NSColor(calibratedWhite: 1.0, alpha: 0.78).setFill()
panelRect.fill()

let badgeRect = NSBezierPath(roundedRect: NSRect(x: 104, y: 472, width: 184, height: 44), xRadius: 22, yRadius: 22)
NSColor(calibratedRed: 0.40, green: 0.29, blue: 0.78, alpha: 0.12).setFill()
badgeRect.fill()

let badgeAttributes: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 18, weight: .semibold),
  .foregroundColor: NSColor(calibratedRed: 0.34, green: 0.23, blue: 0.63, alpha: 1),
]
NSString(string: "AI emotion diary").draw(in: NSRect(x: 128, y: 482, width: 150, height: 24), withAttributes: badgeAttributes)

let titleStyle = NSMutableParagraphStyle()
titleStyle.lineBreakMode = .byWordWrapping

let titleAttributes: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 54, weight: .bold),
  .foregroundColor: NSColor(calibratedRed: 0.12, green: 0.14, blue: 0.22, alpha: 1),
  .paragraphStyle: titleStyle,
]
NSString(string: "Mind Mirror").draw(in: NSRect(x: 104, y: 380, width: 470, height: 70), withAttributes: titleAttributes)

let subtitleAttributes: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 28, weight: .semibold),
  .foregroundColor: NSColor(calibratedRed: 0.27, green: 0.30, blue: 0.40, alpha: 1),
]
NSString(string: "AI Diary & Mood Tracker").draw(in: NSRect(x: 104, y: 330, width: 470, height: 36), withAttributes: subtitleAttributes)

let bodyStyle = NSMutableParagraphStyle()
bodyStyle.lineSpacing = 6
bodyStyle.lineBreakMode = .byWordWrapping

let bodyAttributes: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 24, weight: .regular),
  .foregroundColor: NSColor(calibratedRed: 0.34, green: 0.38, blue: 0.48, alpha: 1),
  .paragraphStyle: bodyStyle,
]
let body = "Discover emotion patterns, write with AI, and reflect on your day with a calm, private journaling app."
NSString(string: body).draw(in: NSRect(x: 104, y: 210, width: 520, height: 100), withAttributes: bodyAttributes)

let chipSpecs: [(String, CGFloat)] = [
  ("7 emotion types", 104),
  ("Photo-based diary", 272),
  ("iOS & Android", 472),
]

for (label, x) in chipSpecs {
  let chipRect = NSBezierPath(roundedRect: NSRect(x: x, y: 124, width: label == "Photo-based diary" ? 176 : 148, height: 40), xRadius: 20, yRadius: 20)
  NSColor(calibratedRed: 0.14, green: 0.18, blue: 0.28, alpha: 0.08).setFill()
  chipRect.fill()

  let chipTextAttributes: [NSAttributedString.Key: Any] = [
    .font: NSFont.systemFont(ofSize: 17, weight: .medium),
    .foregroundColor: NSColor(calibratedRed: 0.21, green: 0.24, blue: 0.33, alpha: 1),
  ]
  NSString(string: label).draw(in: NSRect(x: x + 20, y: 135, width: 150, height: 22), withAttributes: chipTextAttributes)
}

let phoneShadow = NSShadow()
phoneShadow.shadowColor = NSColor(calibratedRed: 0.16, green: 0.20, blue: 0.29, alpha: 0.18)
phoneShadow.shadowBlurRadius = 30
phoneShadow.shadowOffset = NSSize(width: 0, height: -8)
phoneShadow.set()

let phoneRect = NSBezierPath(roundedRect: NSRect(x: 742, y: 98, width: 272, height: 436), xRadius: 40, yRadius: 40)
NSColor(calibratedRed: 0.12, green: 0.14, blue: 0.20, alpha: 1).setFill()
phoneRect.fill()

NSGraphicsContext.current?.saveGraphicsState()
let screenClip = NSBezierPath(roundedRect: NSRect(x: 758, y: 116, width: 240, height: 400), xRadius: 30, yRadius: 30)
screenClip.addClip()

let screenGradient = CGGradient(
  colorsSpace: CGColorSpaceCreateDeviceRGB(),
  colors: [
    NSColor(calibratedRed: 0.99, green: 0.91, blue: 0.80, alpha: 1).cgColor,
    NSColor(calibratedRed: 0.92, green: 0.98, blue: 0.98, alpha: 1).cgColor,
  ] as CFArray,
  locations: [0.0, 1.0]
)!
context.drawLinearGradient(
  screenGradient,
  start: CGPoint(x: 758, y: 516),
  end: CGPoint(x: 998, y: 116),
  options: []
)

let cardRect = NSBezierPath(roundedRect: NSRect(x: 786, y: 364, width: 184, height: 94), xRadius: 24, yRadius: 24)
NSColor(calibratedWhite: 1.0, alpha: 0.90).setFill()
cardRect.fill()

let smallLabelAttributes: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 16, weight: .medium),
  .foregroundColor: NSColor(calibratedRed: 0.50, green: 0.54, blue: 0.61, alpha: 1),
]
NSString(string: "This Week").draw(in: NSRect(x: 860, y: 418, width: 84, height: 20), withAttributes: smallLabelAttributes)

let moodAttributes: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 25, weight: .bold),
  .foregroundColor: NSColor(calibratedRed: 0.20, green: 0.23, blue: 0.33, alpha: 1),
]
NSString(string: "Joy").draw(in: NSRect(x: 860, y: 388, width: 60, height: 28), withAttributes: moodAttributes)

if let icon = NSImage(contentsOf: joyURL) {
  icon.draw(in: NSRect(x: 806, y: 382, width: 44, height: 44))
}

let diaryRect = NSBezierPath(roundedRect: NSRect(x: 786, y: 204, width: 184, height: 132), xRadius: 24, yRadius: 24)
NSColor(calibratedWhite: 1.0, alpha: 0.90).setFill()
diaryRect.fill()

NSString(string: "AI Analysis").draw(in: NSRect(x: 808, y: 294, width: 110, height: 20), withAttributes: smallLabelAttributes)

let diaryAttributes: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 18, weight: .semibold),
  .foregroundColor: NSColor(calibratedRed: 0.20, green: 0.23, blue: 0.33, alpha: 1),
]
NSString(string: "Calm, reflective, and hopeful").draw(in: NSRect(x: 808, y: 252, width: 146, height: 46), withAttributes: diaryAttributes)

let barRect = NSBezierPath(roundedRect: NSRect(x: 808, y: 224, width: 136, height: 10), xRadius: 5, yRadius: 5)
NSColor(calibratedRed: 0.83, green: 0.88, blue: 0.93, alpha: 1).setFill()
barRect.fill()
let fillRect = NSBezierPath(roundedRect: NSRect(x: 808, y: 224, width: 96, height: 10), xRadius: 5, yRadius: 5)
NSColor(calibratedRed: 0.47, green: 0.74, blue: 0.80, alpha: 1).setFill()
fillRect.fill()

NSGraphicsContext.current?.restoreGraphicsState()
image.unlockFocus()

guard let tiffData = image.tiffRepresentation,
      let rep = NSBitmapImageRep(data: tiffData),
      let pngData = rep.representation(using: .png, properties: [:]) else {
  fputs("Failed to create PNG data\n", stderr)
  exit(1)
}

try fileManager.createDirectory(at: outputURL.deletingLastPathComponent(), withIntermediateDirectories: true)
try pngData.write(to: outputURL)
print("Generated \(outputURL.path)")
