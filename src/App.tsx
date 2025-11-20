
import { Col, Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'
import BasicStuffSection from './components/BasicStuffSection'
import CountdownToDate from './components/CountdownToDate'
import CoupleInfo from './components/CoupleInfo'
import GiftTable from './components/GiftTable'
import HeaderInfo from './components/HeaderInfo'
import ImageCarousel from './components/ImageCarousel'
import LocationInfo from './components/LocationInfo'
import RegisterForm from './components/RegisterForm'
import ScheduleInfo from './components/ScheduleInfo'

function App() {
  return (
    <>

      <Layout
        style={{
          padding: 0,
          backgroundImage: 'url("src/assets/background.png")', // Ruta de la imagen
          backgroundRepeat: 'repeat', // Hace que se repita
          backgroundSize: 'auto', // Mantiene el tamaño original
          backgroundPosition: 'top left', // Comienza desde la esquina superior izquierda
          position: 'relative',
          overflow: 'hidden'
        }}>

        {/* <Layout style={{
        padding: 0,
        backgroundColor: token.colorBgContainer,
        position: 'relative',
        overflow: 'hidden'
      }}> */}
        <Content style={{ position: 'relative', zIndex: 1 }}>
          <Row align={'middle'} justify={'center'} >
            <Col xs={23} sm={23} md={16} lg={16} xl={16} xxl={16}>

              <HeaderInfo />

              <CountdownToDate />

              <CoupleInfo />

              <ScheduleInfo />

              <ImageCarousel />

              <BasicStuffSection />

              <ImageCarousel />

              <LocationInfo />

              <RegisterForm />

              <GiftTable />
            </Col>
          </Row>
        </Content >
      </Layout >
    </>
  )
}

export default App
