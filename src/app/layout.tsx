import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "../app/globals.css";
import { TopBar } from "@/components/topbar";
import { Noto_Sans_Bengali } from "next/font/google";

const banglaFont = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata = {
  title: "Next Dashboard",
  description: "My Next.js app with sidebar layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={banglaFont.className}>
        {/* <TopBar /> */}
        <SidebarProvider>
          <AppSidebar />
          <main className="mx-auto ">
            <div>
              <SidebarTrigger />
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
