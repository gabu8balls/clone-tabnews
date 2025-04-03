function Home() {
  return (
    <h1>
      Larissa, eu amo você. Se você me ama, dá uma risadinha! O Boralão me
      ajudou.
    </h1>
  );
}
function HomeBorali() {
  let content = "Larissa, eu amo você. Se você me ama, dá uma risadinha! \\o/";
  content += " Essa é uma página de exemplo para o projeto Next.js.";
  content += " Essa página foi criada para testar o Next.js e o Vercel.";

  let final_value = "";
  content.split(' ').map((word) => {
    final_value += "<span key=\""+word+"\" style=\"margin-left:10px\">"+word+"</span>";
  });

  return <div dangerouslySetInnerHTML={{ __html: final_value }} />;
}

export default Home;
