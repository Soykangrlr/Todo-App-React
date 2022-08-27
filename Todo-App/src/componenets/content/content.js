import ContentFooter from "./contentFooter"
import ContentList from "./contentList"

function Content() {
  return (
    <>
    	<section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ContentList/>
	</section>
    <ContentFooter/>
	
    </>
  )
}
export default Content