const { execFileSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')

const gitDir = path.resolve(process.cwd(), '.git')

if (!fs.existsSync(gitDir)) {
  process.exit(0)
}

const binName = process.platform === 'win32' ? 'simple-git-hooks.cmd' : 'simple-git-hooks'
const binPath = path.resolve(process.cwd(), 'node_modules', '.bin', binName)

if (!fs.existsSync(binPath)) {
  process.exit(0)
}

execFileSync(binPath, { stdio: 'inherit' })
