import { Carousel, Col, Image, Row } from 'antd'

const ImageCarousel = () => {
  return (
    <>
      <Row align={'middle'} justify={'center'} style={{ marginBottom: 100}}>
        <Col span={24}>
          <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={4000}>
            <Image src='https://cdn0.matrimonio.com.co/article-vendor/8605/original/1280/jpg/wedding-decor-2021-11-11-18-51-04-utc_10_148605-164407908312476.jpeg'
              style={{ width: '100%', height: '40vh', objectFit: 'cover' }}
            />
            <Image src='https://cdn0.matrimonio.com.co/article-vendor/8605/original/1280/jpg/wedding-decor-2021-11-11-18-51-04-utc_10_148605-164407908312476.jpeg'
              style={{ width: '100%', height: '40vh', objectFit: 'cover' }}
            />
            <Image src='https://cdn0.matrimonio.com.co/article-vendor/8605/original/1280/jpg/wedding-decor-2021-11-11-18-51-04-utc_10_148605-164407908312476.jpeg'
              style={{ width: '100%', height: '40vh', objectFit: 'cover' }}
            />
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default ImageCarousel