'use strict'

const path = require('path')
const expect = require('chai').expect

const system = require('../../utils/system')

describe('system', () => {
  describe('> getFoldersNameInFolder', () => {
    it('> should get the name of the folders within a folder', () => {
      let folder = path.join(__dirname, 'system')

      let folders = system.getFoldersNameInFolder(folder)

      expect(folders).to.deep.equal(['folder1'])
    })
  })

  describe('> loadModulesFromFolder', () => {
    it('> should load modules within a folder', () => {
      let folder = path.join(__dirname, 'system', 'folder1')

      let modules = system.loadModulesFromFolder(folder)

      expect(typeof modules['module1']).to.not.equal('undefined')
      expect(typeof modules['module2']).to.not.equal('undefined')
    })

    it('> should load modules within a folder except the ones excluded', () => {
      let folder = path.join(__dirname, 'system', 'folder1')

      let modules = system.loadModulesFromFolder(folder, ['module1.js'])

      expect(typeof modules['module1']).to.equal('undefined')
      expect(typeof modules['module2']).to.not.equal('undefined')
    })
  })
})
