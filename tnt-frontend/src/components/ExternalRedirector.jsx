import { useParams } from "react-router";

function ExternalRedirect() {
  const { loc } = useParams();

  window.location.href = `https://www.google.com/search?q=${loc}`;
  //   return <h1>hello word{loc}</h1>; // This component doesn't render anything
}

export default ExternalRedirect;
