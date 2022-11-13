import Fifthdown from '../components/Fifthdown'
import Fourthdown from '../components/Fourthdown'
import Navbar from '../components/Navbar'
import Thirdown from '../components/Thirdown'
import Upperslider from '../components/Upperslider'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Upperslider />
      <Thirdown />
      <Fourthdown />
      <Fifthdown />
    </div>
  )
}
