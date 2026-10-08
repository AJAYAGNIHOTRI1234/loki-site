import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const releaseBase = 'https://github.com/AnimeshRajwar/loki/releases/download'

const releaseAssets = {
	Windows: [
		{
			name: 'loki-windows-amd64.zip',
			size: '~15 MB',
			stable: `${releaseBase}/stable/loki-windows-amd64.zip`,
			latest: `${releaseBase}/latest/loki-windows-amd64.zip`,
		},
		{
			name: 'loki-windows-arm64.zip',
			size: '~15 MB',
			stable: `${releaseBase}/stable/loki-windows-arm64.zip`,
			latest: `${releaseBase}/latest/loki-windows-arm64.zip`,
		},
		{
			name: 'install-loki.bat',
			size: '~1 KB',
			stable: `${releaseBase}/stable/install-loki.bat`,
			latest: `${releaseBase}/latest/install-loki.bat`,
		},
		{
			name: 'install-loki.ps1',
			size: '~2 KB',
			stable: `${releaseBase}/stable/install-loki.ps1`,
			latest: `${releaseBase}/latest/install-loki.ps1`,
		},
		{
			name: 'install-loki-system.ps1',
			size: '~2 KB',
			stable: `${releaseBase}/stable/install-loki-system.ps1`,
			latest: `${releaseBase}/latest/install-loki-system.ps1`,
		},
	],
	macOS: [
		{
			name: 'loki-darwin-amd64.zip',
			size: '~13 MB',
			stable: `${releaseBase}/stable/loki-darwin-amd64.zip`,
			latest: `${releaseBase}/latest/loki-darwin-amd64.zip`,
		},
		{
			name: 'loki-darwin-amd64.tar.gz',
			size: '~13 MB',
			stable: `${releaseBase}/stable/loki-darwin-amd64.tar.gz`,
			latest: `${releaseBase}/latest/loki-darwin-amd64.tar.gz`,
		},
		{
			name: 'loki-darwin-arm64.zip',
			size: '~13 MB',
			stable: `${releaseBase}/stable/loki-darwin-arm64.zip`,
			latest: `${releaseBase}/latest/loki-darwin-arm64.zip`,
		},
		{
			name: 'loki-darwin-arm64.tar.gz',
			size: '~13 MB',
			stable: `${releaseBase}/stable/loki-darwin-arm64.tar.gz`,
			latest: `${releaseBase}/latest/loki-darwin-arm64.tar.gz`,
		},
		{
			name: 'install-loki.command',
			size: '~1 KB',
			stable: `${releaseBase}/stable/install-loki.command`,
			latest: `${releaseBase}/latest/install-loki.command`,
		},
	],
	Linux: [
		{
			name: 'loki-linux-amd64.zip',
			size: '~13 MB',
			stable: `${releaseBase}/stable/loki-linux-amd64.zip`,
			latest: `${releaseBase}/latest/loki-linux-amd64.zip`,
		},
		{
			name: 'loki-linux-amd64.tar.gz',
			size: '~13 MB',
			stable: `${releaseBase}/stable/loki-linux-amd64.tar.gz`,
			latest: `${releaseBase}/latest/loki-linux-amd64.tar.gz`,
		},
		{
			name: 'loki-linux-arm64.zip',
			size: '~13 MB',
			stable: `${releaseBase}/stable/loki-linux-arm64.zip`,
			latest: `${releaseBase}/latest/loki-linux-arm64.zip`,
		},
		{
			name: 'loki-linux-arm64.tar.gz',
			size: '~13 MB',
			stable: `${releaseBase}/stable/loki-linux-arm64.tar.gz`,
			latest: `${releaseBase}/latest/loki-linux-arm64.tar.gz`,
		},
		{
			name: 'install-loki.sh',
			size: '~2 KB',
			stable: `${releaseBase}/stable/install-loki.sh`,
			latest: `${releaseBase}/latest/install-loki.sh`,
		},
		{
			name: 'install-loki-system.sh',
			size: '~2 KB',
			stable: `${releaseBase}/stable/install-loki-system.sh`,
			latest: `${releaseBase}/latest/install-loki-system.sh`,
		},
		{
			name: 'install-loki.run',
			size: '~1 KB',
			stable: `${releaseBase}/stable/install-loki.run`,
			latest: `${releaseBase}/latest/install-loki.run`,
		},
		{
			name: 'install-loki.desktop',
			size: '~1 KB',
			stable: `${releaseBase}/stable/install-loki.desktop`,
			latest: `${releaseBase}/latest/install-loki.desktop`,
		},
	],
	Checksums: [
		{
			name: 'checksums.txt',
			size: '~1 KB',
			stable: `${releaseBase}/stable/checksums.txt`,
			latest: `${releaseBase}/latest/checksums.txt`,
		},
	],
}

const assetInfo: Record<string, string> = {
	'loki-windows-amd64.zip':
		'Manual binary bundle for Windows x64 users who want to install Loki by hand.',
	'loki-windows-arm64.zip':
		'Manual binary bundle for Windows ARM64 users who want to install Loki by hand.',
	'install-loki.bat': 'Windows batch script for automated installation.',
	'install-loki.ps1': 'PowerShell script for automated Windows installation.',
	'install-loki-system.ps1': 'PowerShell script for system-wide Windows installation.',
	'loki-darwin-amd64.zip': 'Manual binary bundle for Intel-based macOS systems.',
	'loki-darwin-amd64.tar.gz': 'Tarball for manual installation on Intel-based macOS systems.',
	'loki-darwin-arm64.zip': 'Manual binary bundle for Apple Silicon macOS systems.',
	'loki-darwin-arm64.tar.gz': 'Tarball for manual installation on Apple Silicon macOS systems.',
	'install-loki.command': 'macOS launcher script for automated installation.',
	'loki-linux-amd64.zip': 'Manual binary bundle for Linux x64 systems.',
	'loki-linux-amd64.tar.gz': 'Tarball for manual installation on Linux x64 systems.',
	'loki-linux-arm64.zip': 'Manual binary bundle for Linux ARM64 systems.',
	'loki-linux-arm64.tar.gz': 'Tarball for manual installation on Linux ARM64 systems.',
	'install-loki.sh': 'Bash installer for automated Linux/macOS installation.',
	'install-loki-system.sh': 'System-wide bash installer for Linux/macOS installation.',
	'install-loki.run': 'Linux installer runner for desktop environment setup.',
	'install-loki.desktop': 'Desktop launcher definition for Linux environments.',
	'checksums.txt': 'SHA256 checksum file for verifying downloaded assets.',
}

export const metadata = {
	title: 'Install Loki',
	description:
		'Download all Loki stable and latest release assets for Windows, macOS, Linux, and checksums.',
}

export default function InstallPage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col bg-background text-foreground">
			<Header />

			<main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 lg:px-8">
				<section className="mb-12 rounded-2xl border border-border bg-card/60 p-8 shadow-lg shadow-primary/5">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-3xl">
							<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/90">
								Install
							</p>
							<h1 className="text-4xl font-black tracking-[-0.05em] text-foreground md:text-5xl">
								Download Loki release assets
							</h1>
							<p className="mt-4 max-w-2xl text-lg text-muted-foreground">
								Browse every available asset for the stable and latest release
								channels.
							</p>
						</div>

						<div className="flex flex-wrap gap-3">
							<Link href="/">
								<Button variant="secondary">Back to home</Button>
							</Link>
							<Link href="/docs">
								<Button>View docs</Button>
							</Link>
						</div>
					</div>
				</section>

				<section id="download" className="mb-16 scroll-mt-24">
					<div className="mb-6">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/90">
							Downloads
						</p>
						<h2 className="mt-2 text-3xl font-bold">All stable and latest assets</h2>
					</div>

					<div className="space-y-8">
						{Object.entries(releaseAssets).map(([platform, items]) => (
							<div
								key={platform}
								className="overflow-hidden rounded-2xl border border-border bg-card"
							>
								<div className="border-b border-border bg-background/80 px-5 py-4">
									<h3 className="text-2xl font-bold text-primary">{platform}</h3>
								</div>

								<div className="overflow-x-auto">
									<table className="w-full text-left text-sm">
										<thead className="bg-background/60 text-muted-foreground">
											<tr>
												<th className="px-5 py-3 font-medium">Name</th>
												<th className="px-5 py-3 font-medium">Size</th>
												<th className="px-5 py-3 font-medium">Stable</th>
												<th className="px-5 py-3 font-medium">Latest</th>
												<th className="px-5 py-3 font-medium text-right">Info</th>
											</tr>
										</thead>
										<tbody>
											{items.map((item) => (
												<tr
													key={`${platform}-${item.name}`}
													className="border-t border-border"
												>
													<td className="px-5 py-4 font-mono text-foreground/90">
														{item.name}
													</td>
													<td className="px-5 py-4 text-muted-foreground">
														{item.size}
													</td>
													<td className="px-5 py-4">
														<a
															href={item.stable}
															target="_blank"
															rel="noreferrer"
														>
															<Button size="sm">Download</Button>
														</a>
													</td>
													<td className="px-5 py-4">
														<a
															href={item.latest}
															target="_blank"
															rel="noreferrer"
														>
															<Button size="sm" variant="secondary">
																Download
															</Button>
														</a>
													</td>
													<td className="px-5 py-4 text-right">
														<span
															title={assetInfo[item.name] || 'Download asset for Loki.'}
															className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-primary"
															aria-label={
																assetInfo[item.name] || 'Download asset for Loki.'
															}
														>
															i
														</span>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}
