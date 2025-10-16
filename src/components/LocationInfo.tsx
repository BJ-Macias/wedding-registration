import { Col, message, Row, Typography } from "antd"
import GlassCard from "./GlassCard"
import HereMap from "./HereMap"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

const location = "Lindavista S/N, Villas de Monticello, 45200 Zapopan, Jal."

const LocationInfo = () => {

  const [messageApi, contextHolder] = message.useMessage()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(location)
      messageApi.success("¡Texto copiado!")
    } catch {
      messageApi.error("No se pudo copiar")
    }
  }

  const screens = useBreakpoint()

  return (
    <GlassCard style={{ width: "auto", cursor: "pointer", alignContent: 'center', justifyContent: 'center', marginBottom: 160 }}>
      {contextHolder}
      <Row align={'middle'} justify={'space-around'} gutter={10}>
        <Col span={10} xs={24} sm={24} md={18} lg={8} xxl={8}>
          <Typography className='tinos-regular-italic responsive-text' style={{ textAlign: 'center' }}>Dirección del evento:</Typography>
          <Typography className='tinos-regular-italic responsive-text' style={{ textAlign: "center", cursor: "pointer" }} onClick={handleCopy}>
            {location}
          </Typography>
        </Col>
        <Col span={14} xs={24} sm={24} md={22} lg={12} xxl={12}
          style={{ height: screens.md ? "70vh" : '40vh', alignContent: 'center' }}>
          <HereMap />
        </Col>
      </Row>
    </GlassCard>
  )
}

export default LocationInfo