import React from "react";
import rfidbanner from "../../assets/images/rfidbanner.jpg";
import rfidlogo from "../../assets/images/rfidlogo.png";
import rfidproduct from "../../assets/images/r5.png";
import rfidproduct1 from "../../assets/images/ura4.png";
import rfidproduct2 from "../../assets/images/r20.png";
import rfidproduct3 from "../../assets/images/r3.png";
import rfidUseCase from "../../assets/images/rfidtag.png";
import rfidUseCase1 from "../../assets/images/pic1.png";
import rfidUseCase2 from "../../assets/images/pic2.png";
import rfidUseCase3 from "../../assets/images/pic3.png";
import rfidUseCase4 from "../../assets/images/pic4.png";
import rfidUseCase5 from "../../assets/images/pic5.png";
import rfidUseCase6 from "../../assets/images/pic6.png"; 
import "./AboutRFID.css";

export default function AboutRFID() {
  return (
    <>
      <div className="Container">
        <div>
          <img src={rfidbanner} alt="RFID Banner" className="rfid-banner" />
        </div>

        <div className="Container-text">
          <div className="Container1">
            <div className="Title">RFID СУУРЬ ОЙЛГОЛТ</div>
            <div className="whitetext">
              RFID системийг ашиглахын тулд бүтээгдэхүүн бүрийг чип бүхий шошгожуулсан байх шаардлагатай. Антентай холбогдсон энэхүү чип нь бараа материалын төрөл бүрийн шошгонуудтай холбогдож, тухайн бүтээгдэхүүний өвөрмөц EPC буюу электрон бүтээгдэхүүний код болон бусад мэдээллийг уншж  хянах боломжтой байдаг.
            </div>
            <div className="whitetext">
              RFID уншигч нь суурин эсвэл хөдөлгөөнт төхөөрөмж байхаас үл хамаарч эдгээр шошготой антенаар дамжуулан холбогдож,  хадгалагдсан мэдээллийг шошгоруу тодорхой хэмжээний энерги илгээж ажиллуулдаг ба ингэснээр  өгөгдлийг системрүү илгээх боломжтой болдог. Уншигчид дараа нь гүүр болж, шошгоны өгөгдлийг бизнесийн програмуудад ашиглах боломжтой болгодог.
            </div>
            <div className="lastwhitetext">
              Системийн гол цөм нь хэрэглээний программ хангамж бөгөөд шошго, уншигч, өгөгдөл зэрэг бүх бүрэлдэхүүн хэсгүүдийг нэгтгэдэг. Энэхүү программ хангамж нь өгөгдлийг боловсруулахад чухал ач холбогдолтой бөгөөд бизнесүүдэд бараа материалыг үр дүнтэй удирдах, хянах боломжийг олгож, RFID системийн цогц үйл ажиллагааг асуудалгүй хангах боломжийг бий болгодог.

            </div>
          </div>

          <div className="rfid-section">
            <div className="rfid-left">
              <div className="rfid-title">RFID ШИЙДЭЛ НЬ ДАРААХ ХЭСГҮҮДЭЭС БҮРДДЭГ :</div>
              <ul className="rfid-list">
                <li>RFID шошго</li>
                <li>Уншигч төхөөрөмж</li>
                <li>Антенна</li>
                <li>Хэвлэгч төхөөрөмж</li>
                <li>Хэрэглээний програм хангамж</li>
              </ul>
            </div>
            <div className="rfid-right">
              <img src={rfidlogo} alt="RFID Logo" className="rfid-logo" />
            </div>
          </div>

         
          <div className="rfid-tag-block">
            <div className="rfid-tag-image animate-fadeInRight">
              <img src={rfidUseCase} alt="RFID tag explanation" />
            </div>
            <div className="rfid-tag-text animate-fadeInLeft">
              <div className="secTitle">RFID ШОШГО</div>
              <div className="secwhitetext">
                RFID шошго нь богино дамжуулаг (IC) гэж нэрлэгддэг жижиг чипээс болон <br />
                үүнтэй холбогдсон антеннаас бүрдэнэ. Энэхүү антенна нь ихэвчлэн <br />
                цаасан дээр эсвэл PET (полиэтилен терефталат) биет дээр суурилагдсан <br />
                байдаг. Чип болон антенны хослолыг inlay гэж нэрлэдэг. Дараа нь энэхүү <br />
                inlay-ыг хэвлэмэл шошго болон түүний наалдамхай дэвсгэр хоёрын <br />
                хооронд байрлуулж эсвэл зориулалтаас нь хамааран илүү бат бөх <br />
                бүтэцтэй болгон ашигладаг.
              </div>
            </div>
          </div>

          <div className="rfid-tag-block2">
            <div className="rfid-tag-image animate-fadeInLeft">
              <img src={rfidUseCase1} alt="IC" />
            </div>
            <div className="rfid-tag-text2 animate-fadeInRight">
              <div className="secTitle">TAG INTEGRATED CIRCUIT(IC)</div>
              <div className="secwhitetext">
                RFID шошго дахь чип буюу богино дамжуулагч (IC) нь шошгоны <br />
                чадамд чухал үүрэгтэй байдаг. Энэхүү нь чип үйлдвэрлэгчээс <br />
                олгосон шошго таних зорилготой TID буюу өвөрмөц серийн <br />
                дугаараар урьдчилан програмчлагдсан байдаг. Үүнээс гадны чип нь <br />
                бараа материалыг хянах болон удирдахад ашиглагддаг электрон <br />
                бүтээгдэхүүний код (EPC) хадгалах тусгай санах ойтой байдаг.
              </div>
            </div>
          </div>

          <div className="rfid-tag-block">
            <div className="rfid-tag-image animate-fadeInRight">
              <img src={rfidUseCase2} alt="EPC" />
            </div>
            <div className="rfid-tag-text animate-fadeInLeft">
              <div className="secTitle">ЭЛЕКТРОН БҮТЭЭГДЭХҮҮНИЙ КОД (EPC)</div>
              <div className="secwhitetext">
                RFID шошгоны чип дэх электрон бүтээгдэхүүний код (EPC) нь 24 HEX  <br />
                тэмдэгтээс бүрдсэн 16-тын кодыг ашигладаг өвөрмөц таних тэмдэг юм.  <br />
                цаасан дээр эсвэл PET (полиэтилен терефталат) биет дээр суурилагдсан <br />
                төрөл, өвөрмөц серийн дугаар зэрэг өөрийн хүссэн дэлгэрэнгүй ү <br />
                мэдээллийг хадгалж болно. Энэхүү код нь бараа материалыг мэдээллийн <br />
                сантай холбож, агуулахын хяналт, ложистикийн үйл явцыг илүү үр  <br />
                ашигтай болгох замаар дэлхий даяар хянах, удирдахад ашигладаг.
              </div>
            </div>
          </div>

          <div className="rfid-tag-block2">
            <div className="rfid-tag-image animate-fadeInLeft">
              <img src={rfidUseCase3} alt="RFID tag antenna" />
            </div>
            <div className="rfid-tag-text2 animate-fadeInRight">
              <div className="secTitle">RFID ШОШГОНЫ АНТЕННА</div>
              <div className="secwhitetext">
                RFID шошгон дээрх антенна нь чипийг ажиллуулахын тулд энерги <br />
                дамжуулах үүрэгтэй. Антенна нь том байх тусам илүү их энерги <br />
                цуглуулж, унших зайг хол байлгадаг. Антеннүүд нь тодорхой <br />
                хэрэгцээнээс хамаарч өөр өөр байж бөгөөд зарим нь тодорхой <br />
                давтамжтай байх эсвэл шингэн, металл зэрэгт материалд <br />
                зориулагдсан байдаг. Тэдгээрийн дээр нь мэдээлэл хэвлэх эсвэл <br />
                код шарах зэрэг шаардлагаас хамаарч янз бүрийн хэлбэр, хэмжээ <br />
                эсхүл материалаар бүтээгдэж болно. Нэг антеннтай шошго нь дохио <br />
                хүлээн авах боломжгүй ба “ул уншигч орчин”-той байж болох ч хос <br />
                антеннтай шошго нь энэ төрлийн бүсийг арилгаж, найдвартай <br />
                ажиллагааг хангаж өгдөг.
              </div>
            </div>
          </div>

          <div className="rfid-tag-block">
            <div className="rfid-tag-image animate-fadeInRight">
              <img src={rfidUseCase4} alt="RFID scanner" />
            </div>
            <div className="rfid-tag-text animate-fadeInLeft">
              <div className="secTitle">RFID УНШИГЧ ТӨХӨӨРӨМЖ</div>
              <div className="secwhitetext">
                RFID уншигч нь шошгоны өгөгдлийг байгууллагын программ хангамжтай <br />
                холбоход маш чухал үүрэгтэй. Үүгээр тооллого, хайлт, анхан шатны өгөгдөл <br />
                дамжуулах гэх мэт маш чухал ажлуудыг ойр орчимын шошготой холбогдож <br />
                гүйцэтгэдэг. Chainway брэндийн C72, R5, UR4A, R3, M8N R20 зэрэг уншигчид нь
                өндөр чанар, найдвартай ажиллагаатай гэдгээрээ дэлхийн тэргүүлэгчдийн
                эгнээнд зүй ёсоор ордог. Эдгээр уншигчдыг хослуулсанаар төрөл бүрийн
                бизнесийн орчинд тулгарах асуудлуудыг цогцоор шийдвэрлэх чадвах бөгөөд
                их хэмжээний бараа материалыг ямар ч байгууллага ашиглах боломжтой юм.
              </div>
            </div>
          </div>
          <div className="rfid-reader-grid">
          <div className="reader-card">
            <img src={rfidproduct} alt="R5" className="reader-img" />
            <div className="reader-label">R5 БУГУЙН УНШИГЧ</div>
          </div>
          <div className="reader-card">
            <img src={rfidproduct1} alt="URA4" className="reader-img" />
            <div className="reader-label">URA4 СУУРИН УНШИГЧ</div>
          </div>
          <div className="reader-card">
            <img src={rfidproduct2} alt="R20" className="reader-img" />
            <div className="reader-label">R20 ЗҮҮДЭГ УНШИГЧ</div>
          </div>
          <div className="reader-card">
            <img src={rfidproduct3} alt="R3" className="reader-img" />
            <div className="reader-label">R3 ШИРЭЭНИЙ УНШИГЧ</div>
          </div>
        </div>

        <div className="rfid-tag-block2">
            <div className="rfid-tag-image animate-fadeInLeft">
              <img src={rfidUseCase5} alt="RFID tag antenna" />
            </div>
            <div className="rfid-tag-text2 animate-fadeInRight">
              <div className="secTitle">RFID СУУРИН УНШИГЧЫН АНТЕННА</div>
              <div className="secwhitetext">
                RFID шошгон дээрх антенна нь чипийг ажиллуулахын тулд энерги <br />
                дамжуулах үүрэгтэй. Антенна нь том байх тусам илүү их энерги <br />
                цуглуулж, унших зайг хол байлгадаг. Антеннүүд нь тодорхой <br />
                хэрэгцээнээс хамаарч өөр өөр байж бөгөөд зарим нь тодорхой <br />
                давтамжтай байх эсвэл шингэн, металл зэрэгт материалд <br />
                зориулагдсан байдаг. Тэдгээрийн дээр нь мэдээлэл хэвлэх эсвэл <br />
                код шарах зэрэг шаардлагаас хамаарч янз бүрийн хэлбэр, хэмжээ <br />
                эсхүл материалаар бүтээгдэж болно. Нэг антеннтай шошго нь дохио <br />
                хүлээн авах боломжгүй ба “ул уншигч орчин”-той байж болох ч хос <br />
                антеннтай шошго нь энэ төрлийн бүсийг арилгаж, найдвартай <br />
                ажиллагааг хангаж өгдөг.
              </div>
            </div>
          </div>

          <div className="rfid-tag-block">
            <div className="rfid-tag-image animate-fadeInRight">
              <img src={rfidUseCase6} alt="RFID scanner" />
            </div>
            <div className="rfid-tag-text animate-fadeInLeft">
              <div className="secTitle">RFID ENCODING PRINTER</div>
              <div className="secwhitetext">
                RFID уншигч нь шошгоны өгөгдлийг байгууллагын программ хангамжтай <br />
                холбоход маш чухал үүрэгтэй. Үүгээр тооллого, хайлт, анхан шатны өгөгдөл <br />
                дамжуулах гэх мэт маш чухал ажлуудыг ойр орчимын шошготой холбогдож <br />
                гүйцэтгэдэг. Chainway брэндийн C72, R5, UR4A, R3, M8N R20 зэрэг уншигчид нь
                өндөр чанар, найдвартай ажиллагаатай гэдгээрээ дэлхийн тэргүүлэгчдийн
                эгнээнд зүй ёсоор ордог. Эдгээр уншигчдыг хослуулсанаар төрөл бүрийн
                бизнесийн орчинд тулгарах асуудлуудыг цогцоор шийдвэрлэх чадвах бөгөөд
                их хэмжээний бараа материалыг ямар ч байгууллага ашиглах боломжтой юм.
              </div>
            </div>
          </div>
          <div className="rfid-compare-container">
  <div className="frame-66 combined-header">
    <div className="frame-67">
      <img
        className="element-6"
        alt="Element"
        src="https://c.animaapp.com/maweg3z5O6b9fU/img/5115664-1.png"
      />
      <div className="text-wrapper-28">RFID</div>
    </div>

    <div className="text-wrapper-29">VS</div>

    <div className="frame-68">
      <div className="text-wrapper-30">BARCODE</div>
      <img
        className="barcode-2"
        alt="Barcode"
        src="https://c.animaapp.com/maweg3z5O6b9fU/img/barcode-2-1.png"
      />
    </div>
  </div>

  <div className="rfid-compare-table">
    <div className="rfid-compare-row">
      <div className="rfid-col left">РАДИО ДОЛГИОН</div>
      <div className="rfid-col center">TECHNOLOGY</div>
      <div className="rfid-col right">өгөгдлийн дүрслэл ба лазер сканнер</div>
    </div>
    <div className="rfid-compare-row">
      <div className="rfid-col left">ИХ ХЭМЖЭЭНИЙ ӨГӨГДЛИЙГ ХАДГАЛАХ, ДАМЖУУЛАХ БОЛОМЖТОЙ.</div>
      <div className="rfid-col center">DATA STORAGE</div>
      <div className="rfid-col right">ЗӨВХӨН ХЯЗГААРЛАГДМАЛ ХЭМЖЭЭНИЙ ӨГӨГДӨЛ ХАДГАЛАХ БОЛОМЖТОЙ</div>
    </div>
    <div className="rfid-compare-row">
      <div className="rfid-col left">ШУУД ХАРАХ ШААРДЛАГАГҮЙГЭЭР УНШИХ БОЛОМЖТОЙ</div>
      <div className="rfid-col center">READABILITY</div>
      <div className="rfid-col right">УНШИХЫН ТУЛД СКАННЕРЫН ШУУД ХАРАГДАХ ХЭСЭГТ БАЙХ ШААРДЛАГАТАЙ</div>
    </div>
    <div className="rfid-compare-row">
      <div className="rfid-col left">АЛСЫН ЗАЙНААС УНШИХ БОЛОМЖТОЙ</div>
      <div className="rfid-col center">RANGE</div>
      <div className="rfid-col right">СКАННЕРТАЙ ОЙРХОН БАЙХ ШААРДЛАГАТАЙ</div>
    </div>
    <div className="rfid-compare-row">
      <div className="rfid-col left">УДААН ЭДЭЛГЭЭТЭЙ, ГЭМТЭЛД ТЭСВЭРТЭЙ</div>
      <div className="rfid-col center">DURABILITY</div>
      <div className="rfid-col right">ЭЛЭГДЭЛ, УРАГДСАНЫ УЛМААС АМАРХАН ГЭМТЭХ ЭСВЭЛ УНШИХ БОЛОМЖГҮЙ</div>
    </div>
    <div className="rfid-compare-row">
      <div className="rfid-col left">АНХНЫ ӨРТӨГ ӨНДӨР</div>
      <div className="rfid-col center">COST</div>
      <div className="rfid-col right">БОЛОМЖИЙН ҮНЭ, ХЭРЭГЖҮҮЛЭХЭД ХЯЛБАР</div>
    </div>
    <div className="rfid-compare-row">
      <div className="rfid-col left">ОБЪЕКТ ДОТОР СУУЛГАЖ ЭСВЭЛ БҮТЭЭГДЭХҮҮНИЙ САВЛАГААНД НЭГТГЭЖ БОЛНО</div>
      <div className="rfid-col center">FLEXIBILITY</div>
      <div className="rfid-col right">ГАДАРГУУ ДЭЭР ХЭВЛЭСЭН БӨГӨӨД БАЙРЛУУЛАХАД ХАНГАЛТТАЙ ЗАЙ ШААРДЛАГАТАЙ</div>
    </div>
  </div>
</div>

<div className="rfid-advantage-block">
  <div className="rfid-advantage-text">
    <div className="rfid-advantage-title">RFID-ЫН ДАВУУ ТАЛ</div>
    <div>
      Бар код болон бусад автомат таних технологиудаас ялгаатай нь RFID шошго нь өвөрмөц,
      хуулагдах боломжгүй серийн дугаартай байдаг бөгөөд автоматаар, нэгэн зэрэг, хүний
      оролцоо шаардлагагүйгээр мэдээллийг таних боломжтой. Бүрэн хэрэгжсэн тохиолдолд RFID
      технологи нь бодит цагийн горимоор дэлхийн хаанаас бараа материалд хяналт тавих,
      үлдэгдлээ шууд шалгах, аюулгүй байдлын өндөр зэрэглэлийн хамгаалалттай болж улмаар
      борлуулалт, үр ашиг, мэдээллийн оновчтой байдал, мэдээлэлд үндэслэсэн шийдвэр гаргалт
      зэргийг шинэ түвшинд хүргэх боломжтой юм.
    </div>
  </div>
  <div className="rfid-advantage-image">
    <img src={rfidUseCase} alt="RFID Advantage" />
  </div>
</div>
    <div style={{ textAlign: "center" }}>
  <div className="rfid-title1">RFID ТЕХНОЛОГИЙН ТҮҮХ</div>
</div>

<div className="rfid-timeline">
  <div className="timeline-line"></div>

  <div className="timeline-entry left">
    <div className="timeline-circle">1945</div>
    <div className="timeline-box">
      <strong>Анхны RFID чип</strong><br />
      Mario W. Cardullo гэх АНУ-ын иргэн анхны идэвхтэй RFID чипний патентыг эзэмшжээ.
    </div>
  </div>

  <div className="timeline-entry right">
    <div className="timeline-circle">1973</div>
    <div className="timeline-box">
      <strong>Дэлхийн 2-р дайн</strong><br />
      Дайны үеэр Британий нисгэгчдийн байршлыг олж тогтоох зориулалттай RFID системийг үүсгэв.
    </div>
  </div>

  <div className="timeline-entry left">
    <div className="timeline-circle">1990</div>
    <div className="timeline-box">
      <strong>Wal-Mart кейс</strong><br />
      АНУ-ын Wal-mart дэлгүүр анхны RFID програмд 500 сая долларын хөрөнгө оруулав.
    </div>
  </div>

  <div className="timeline-entry right">
    <div className="timeline-circle">2004</div>
    <div className="timeline-box">
      <strong>UHF буюу өндөр давтамжтай RFID</strong><br />
      6 метр хүртэлх унших зайтай UHF уншигч зохион бүтээгдэв.
    </div>
  </div>

  <div className="timeline-entry left">
    <div className="timeline-circle">2016</div>
    <div className="timeline-box">
      <strong>Нэг чипний ашиг</strong><br />
      ROI 200%-д хүрэв. RFID-ийн үнэ цэнэ нэмэгдэв.
    </div>
  </div>

  <div className="timeline-entry right">
    <div className="timeline-circle">2020</div>
    <div className="timeline-box">
      <strong>Үнэ бууралт</strong><br />
      Үйлдвэрлэгчид 30%-иар хямд RFID шошго гаргаж эхлэв.
    </div>
  </div>

  <div className="timeline-entry left">
    <div className="timeline-circle">2030</div>
    <div className="timeline-box">
      <strong>RFID зах зээл</strong><br />
      2030 он гэхэд 31.5 тэрбум ам.долларын хандалттай болно.
    </div>
  </div>
</div>


        </div>
      </div>
    </>
  );
}
