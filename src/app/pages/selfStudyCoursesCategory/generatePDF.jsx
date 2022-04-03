const express = require('express')
const router = express.Router()

const puppeteer = require('puppeteer')

const generatePDF = async (html = '') => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'networkidle0' })
  const pdfBuffer = await page.pdf({ format: 'a4' })

  await page.close()
  await browser.close()

  return pdfBuffer
}

router.post('/', async (req, res) => {
  // console.log(req.body)
  const pdf = await generatePDF(req.body.html)
  // res.contentType('application/pdf')
  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
  res.send(pdf)
})

module.exports = router


const GeneratePDF = () => {
const names = ['John', 'Alexander', ' Alex', 'Allan', 'Jacob']

  
  return (  
    <a href="post(4).pdf" without rel="noopener noreferrer" target="_blank">
    <button trailingIcon="picture_as_pdf" label="Resume">
      PDF
    </button>
 </a>
  )
}

export default GeneratePDF