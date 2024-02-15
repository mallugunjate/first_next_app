
import '@/app/ui/global.css';
import Link from 'next/link'
import Image from 'next/image'
export default function Page() {
  return (
    <div className='home'>
      <div className='row masthead'>
        <Image
                src="/masthead_mt_baker_alpenglow.jpg"
                width={1600}
                height={600}
                alt="banner image"
          />
        <div className='secondary'>
          <div className='inner'>
            <h1>Helping Kids<br/> Lead Healthier,<br/> Happier Lives®</h1>
            <h3>Discover the DAFO® experience</h3>
            <p>We believe better mobility gives children a wider range of<br/> experiences, more success in their activities, and ultimately<br/> more control over their lives.</p>
          </div>
        </div>
      </div>
      <div className="row split">
        <div className="split-teaser split-teaser-background-one">
            <h2 className="has-subhead">
              <a href="/products" className="big-target big-target-anchor">Our Products  &#8594;<br/></a>
              <span>Explore custom DAFOs and Fast Fit® solutions.</span>
              <Image
                src="/teaser-home-products.png"
                width={180}
                height={60}
                alt="banner image"
            />
            </h2>
        </div>
        <div className="split-teaser split-teaser-background-two">
            <h2 className="has-subhead">
              <a href="/products" className="big-target big-target-anchor">DAFO Guide to Brace Selection  &#8594;<br/></a>
              <span>Explore custom DAFOs and Fast Fit® solutions.</span>
              <Image
                src="/teaser-home-guide.png"
                width={180}
                height={60}
                alt="banner image"
            />
            </h2>
        </div>
      </div>
    </div>
  )
}
