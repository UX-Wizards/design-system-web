const { Card, CardPrimaryContent, Body2, Headline6, Subtitle2, CardActions, CardActionButtons, Button} = window['MaterialUI'];

function UXWTypography(props) {
  return (
    <div className="container">
      <h2 id="typography--this-is-overpass" className="text-2xl pb-4">This is Overpass</h2>
      <p>Inspired by the typeface used in road signage all around America, Overpass represents the UX Wizards’ ever expanding reach.
      </p>
      <a href="https://fonts.google.com/specimen/overpass">↳ Download Overpass</a>
      <h2 id="typography--scale" className="text-2xl pb-4 pt-16">Scale</h2>
      <p>The scale is absolute, but the font-weight and styling are simply guidelines. Headings can be selected from the scale as necessary, but hierarchy must be consistent across each medium.
        This scale works best with 12, 14, or 16 as the base font-size (1em = 16px). The samples below show the scale with a base of 16px.
      </p>
      <table className="w-full text-left table-auto my-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Style</th>
            <th className="px-4 py-2">Size (em)</th>
            <th className="px-4 py-2">Size (px)</th>
            <th className="px-4 py-2">Sample</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Extra Bold</td>
            <td className="px-4 py-2">3.375em</td>
            <td className="px-4 py-2">54px</td>
            <td className="px-4 py-2 font-extrabold" style={{fontSize: "3.375em", lineHeight: 1}}>Design meets magic</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Extra Bold</td>
            <td className="px-4 py-2">2.25em</td>
            <td className="px-4 py-2">36px</td>
            <td className="px-4 py-2 font-extrabold text-4xl">Design meets magic</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Bold</td>
            <td className="px-4 py-2">1.75</td>
            <td className="px-4 py-2">27px</td>
            <td className="px-4 py-2 font-bold" style={{fontSize: "1.75em", lineHeight: 1}}>Design meets magic</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Regular</td>
            <td className="px-4 py-2">1.5em</td>
            <td className="px-4 py-2">24px</td>
            <td className="px-4 py-2 text-2xl">Design meets magic</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Regular</td>
            <td className="px-4 py-2">1.313em</td>
            <td className="px-4 py-2">21px</td>
            <td className="px-4 py-2" style={{fontSize: "1.313em"}}>Design meets magic</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Bold</td>
            <td className="px-4 py-2">1em</td>
            <td className="px-4 py-2">16px</td>
            <td className="px-4 py-2 font-bold">Design meets magic</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Regular</td>
            <td className="px-4 py-2">1em</td>
            <td className="px-4 py-2">16px</td>
            <td className="px-4 py-2">Design meets magic</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Regular</td>
            <td className="px-4 py-2">0.875em</td>
            <td className="px-4 py-2">14px</td>
            <td className="px-4 py-2 text-sm">Design meets magic</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Regular</td>
            <td className="px-4 py-2">0.75em</td>
            <td className="px-4 py-2">12px</td>
            <td className="px-4 py-2 uppercase text-xs">Design meets magic</td>
          </tr>
        </tbody>
      </table>
      <h2 id="typography--guidelines" className="text-2xl pb-4 pt-16">Guidelines</h2>
      <h3 className="text-xl pb-4 pt-8">Leading</h3>
      <p>Ideally, body type should have a line-height of at least 125% of the font size. For example, a paragraph of font size 14 with a line-height of 24.
      </p>
      <h3 className="text-xl pb-4 pt-8">Character length</h3>
      <p>Limit line length of body text between 50-75 characters for better readability.
      </p>
      <h3 className="text-xl pb-4 pt-8">Accessibility</h3>
      <p>Accessibility comes first. Type colors should meet WCAG 2.0 standard for contrast.
        ↳ Color contrast guidelines
      </p>
      <h2 id="typography--usage" className="text-2xl pb-4 pt-16">Usage</h2>
      <p>Example</p>
      <Card className='mdc-card demo-card'>
        <CardPrimaryContent className='demo-card__primary-action'>
          <div className='demo-card__primary'>
            <Headline6 className='demo-card__title'>
              Our Changing Planet
            </Headline6>
            <Subtitle2 className='demo-card__subtitle'>
              by Kurt Wagner
            </Subtitle2>
          </div>
          <Body2 className='demo-card__secondary'>
            Visit ten places on our planet that are undergoing the biggest changes today.
          </Body2>
        </CardPrimaryContent>
        <CardActions>
          <CardActionButtons>
            <Button>Read</Button>
          </CardActionButtons>
        </CardActions>
      </Card>
      <h2 id="typography--css" className="text-2xl pb-4 pt-16">CSS</h2>
    </div>
  );
}