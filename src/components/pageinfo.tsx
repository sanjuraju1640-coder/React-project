import { useEffect } from 'react'

function PageInfo() {
  useEffect(() => {
    document.title = "My React App"
    console.log("Page loaded successfully")
  }, [])

  return (
    <div>
      <h1>Page has loaded</h1>
    </div>
  )
}

export default PageInfo
