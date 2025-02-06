import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SupportPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Support</h1>
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Contact Support</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your message"
            ></textarea>
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </Card>
    </div>
  )
}

