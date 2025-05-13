
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "../app/globals.css";
import { TopBar } from "@/components/topbar";

export const metadata = {
  title: "My App",
  description: "My Next.js app with sidebar layout",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="mx-auto ">
            <div>
            {/* <TopBar /> */}
            <SidebarTrigger />
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
