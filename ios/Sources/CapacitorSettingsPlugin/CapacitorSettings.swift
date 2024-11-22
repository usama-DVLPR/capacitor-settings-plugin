import Foundation

@objc public class CapacitorSettings: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
