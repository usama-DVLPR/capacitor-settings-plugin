// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorSettings",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorSettings",
            targets: ["CapacitorSettingsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorSettingsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorSettingsPlugin"),
        .testTarget(
            name: "CapacitorSettingsPluginTests",
            dependencies: ["CapacitorSettingsPlugin"],
            path: "ios/Tests/CapacitorSettingsPluginTests")
    ]
)