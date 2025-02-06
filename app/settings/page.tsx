import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/contexts/ThemeContext"

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <Input id="username" type="text" placeholder="Your username" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <Button type="submit">Update Account</Button>
        </form>
      </Card>
      <Card className="mt-6 p-6">
        <h2 className="text-lg font-semibold mb-4">Appearance</h2>
        <div className="flex items-center justify-between">
          <span>Theme</span>
          <Button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</Button>
        </div>
      </Card>
    </div>
  )
}

