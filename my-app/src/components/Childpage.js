
import Faq from "react-faq-component";
import React,{useState,useEffect} from "react";

const data = {
  title: "Frquently Asked Question",
  rows: [
      {
          title: <b>Lorem ipsum dolor sit amet</b>,
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: <b>Nunc maximus, magna at ultricies elementum</b>,
          content:
              "Nunc  jv hvv maximus, magna at ultricies  obortis in arcu auctor, tincid elementum, risus turpis vulputate quam, vitae convallis ex tortor  sed dolor.",
      },
      {
          title: <b>Curabitur laoreet, mauris vel blandit fringilla</b>,
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: <b>What is the package version</b>,
          content: <p>current version  Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leois 1.2.1</p>,
      },
  ],
};

const styles = {
   bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  Text: "bold"
  // rowContentColor: 'grey',
  // arrowColor: "red",
};


const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
  oneItemOpen: true
};


function Childpage() {

  const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
 
  return (
    <div>
    <Faq
        data={data}
        styles={styles}
        config={config
        }
        openIndex={openIndex}
                onClick={handleClick}
    />
</div>



  )
}

export default Childpage;