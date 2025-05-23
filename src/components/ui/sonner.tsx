import { Toaster as Sonner } from "sonner"

interface ToasterProps extends React.ComponentProps<typeof Sonner> {}

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="light" // Pas aan naar "dark" of "system" indien gewenst
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
