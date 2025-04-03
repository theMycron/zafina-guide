import type { Metadata } from 'next';
import { NavBar } from 'components/NavBar'
import Box from '@mui/material/Box';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: 'Next.js on GitHub Pages',
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
				<AppRouterCacheProvider>
					<NavBar />
					<Box component="main" sx={{ p: 3 }}>
						{children}
					</Box>
				</AppRouterCacheProvider>
			</body>
    </html>
  );
}
