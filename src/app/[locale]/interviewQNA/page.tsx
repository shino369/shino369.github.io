import IndexBar from "@/components/IndexBar";
import { Answer, Question } from "@/components/QNA";
import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";

export default function Page({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  return (
    <main className="flex flex-col items-center py-8 px-4 sm:p-20 md:p-24 font-sans relative">
      <IndexBar />

      <section id="greetings">
        <Question id="greetings">挨拶</Question>
        <Answer>
          はじめまして、香港から来たウォンと申します。 <br />
          本日は貴重なお時間をいただき、ありがとうございます。 <br />
          私のフルネームはちょっと読み辛いので、 <br />
          気軽に私のニックネーム、アンソニーと呼んでください。 <br />
        </Answer>
      </section>

      <section id="self-intro">
        <Question id="self-intro">自己紹介</Question>
        <Answer>
          了解いたしました。では改めまして <br />
          <br />
          香港から来たアンソニーと申します。 <br />
          香港城市大学を2021年に卒業後、 <br />
          2社で計2年間フルスタックで、WEBエンジニアの開発職を務めてきました。{" "}
          <br />
          <br />
          新卒でappicidea it solutionsという、 <br />
          受託開発がメインのスタートアップ会社に入社して、 <br />
          そこでバックエンド以外も <br />
          幅広いフロントエンドのフレームワークの勉強ができました。 <br />
          <br />
          そして前職のShiji Information Technologyは <br />
          ホスピタリティ関連のIT会社で、 <br />
          自社プロダクトのフルスタックの開発を任せられました。 <br />
          それ以外もVue.jsを用いたオンライン予 <br />
          約システム（フロントエンド部分）のrenewal
          projectをリードした経験があります。 <br />
          <br />
          仕事以外、プライベートの時間も、技術を勉強するのが好きで、 <br />
          最近はNext.jsの新しいバージョンを勉強しています。 <br />
          <br />
          これまで培ったスキルと経験を御社で活かしておきたいと考えております。{" "}
          <br />
          よろしくお願いいたします。 <br />
        </Answer>
      </section>

      <section id="pr">
        <Question id="pr">自己PRお願いします</Question>
        <Answer>
          私は約2年のフルスタック開発経験を持ち、
          <br />
          フロントエンド領域では
          <br />
          レスポンシブなWEBアプリの制作に長けています。
          <br />
          リアクトJS、ヴューJS、アングラー、そしてネックスJSなど、
          <br />
          様々なJavaScriptフレームワークでの開発経験がございます。
          <br />
          フロントエンド限定ですが、例え全く触ったことがないフレームワークでも
          <br />
          短時間以内習得自信があります。
          <br />
          <br />
          バックエンドにおいては、
          <br />
          Java Spring BootおよびケーキPHPを用いた
          <br />
          RESTful APIの開発経験もございます。
          <br />
          <br />
          3人チームではありますが、フロントエンドのプロジェクトをリードする経験があり
          <br />
          チームのリーダーとして技術の選定から実装まで担当してきました。
          <br />
          <br />
          <br />
          また、既に日本語検定試験1級を取得しており、
          <br />
          仕事上の会話においては支障がございません。
          <br />
          また、英語での業務も問題なく行えます。
          <br />
          即戦力として活躍できると思います。
          <br />
        </Answer>
      </section>
      <section id="university">
        <Question id="university">大学について教えてください</Question>
        <Answer>
          大学は香港城市大学　電気工学部　情報工学科卒です。
          <br />
          英語ではInformation Engineering、プログラミングはもちろんとして
          <br />
          通信やネットワークの授業がたくさんあります。
          <br />
          コンピューターサイエンスと何か異なる点あると言えば
          <br />
          informationの方がWEB専門で、
          <br />
          springbootとかWEB専門のフレームワークの授業があります
          <br />
          WEBプログラミングの基礎はその頃からしっかり身についています
          <br />
        </Answer>
      </section>

      <section id="reason-of-resign">
        <Question id="reason-of-resign">転職の理由は？</Question>
        <Answer>
          私が転職した理由は、日本にくる機会があったからです。
          <br />
          故郷を離れて、日本という新しい環境でチャレンジしたいので、離職しました。
          <br />
        </Answer>
      </section>
      <section id="reason-to-japan">
        <Question id="reason-to-japan">なぜ日本に来た？</Question>
        <Answer>
          そうですね。私は日本に来た多くの外国人と同じ、アニメや漫画とか大好きで、
          <br />
          将来日本で暮らしたいとずっと思ってます。大学卒業後も、
          <br />
          日本で就職したいと思ったものの、海外から応募できる会社が限られて、
          <br />
          審査のハードルも高いです。
          <br />
          <br />
          ところが今年の4月に、日本政府から新しいビザを発表され、私も申請できそうなので
          <br />
          五月の末に申請してみました。七月にビザが発行され、私の担当のプロジェクトも概ね終わったので
          <br />
          仕事を辞めて、九月、日本に来ました。
          <br />
        </Answer>
      </section>
      <section id="sep-to-nov">
        <Question id="sep-to-nov">9～11月何してきました？</Question>
        <Answer>
          9月は日本での生活が必要なものを整うがメインです。
          <br />
          住む場所は日本に来る前に済みましたが、日用品は揃ってないので、
          <br />
          ホテルで一週間泊まって、日用品の買い出しをしました。
          <br />
          そして、携帯電話番号の申請、銀行口座の開設、住民登録とか
          <br />
          色々準備しないといけないことを解決しつつ、
          <br />
          日本で留学や仕事してる友人たちと食事をして、アドバイスを貰いました。
          <br />
          <br />
          そして10月は、部屋探しがメインですね。
          <br />
          元々住んでいた部屋は13メートルしかない、ワンルームアパートで、私物が少し増えただけで
          <br />
          狭く感じます。しかも文京区で、部屋が小さい割に、家賃が高いです。
          <br />
          10月の殆どが部屋探しに使いました。
          <br />
          <br />
          そして友人の紹介で、江戸川区中葛西に決めて
          <br />
          11月ついたちに今の住んでるところに引っ越しました。
          <br />
          <br />
          それから色々落ち着いたあと、
          <br />
          11月の末に求職活動を始めました。
          <br />
        </Answer>
      </section>
      {/* <section id="siboudouki-linkx">
        <Question id="siboudouki-linkx">
          何故うちの会社?（志望動機---Linkx）
        </Question>
        <Answer>
          私の志望動機は、
          <br />
          主に、shikAI（シカイ）という視覚障がい者のためのナビゲーションアプリ
          <br />
          その存在大きいです。
          <br />
          技術は、よりいい社会のためにあると、私は考えています。
          <br />
          Linkxは普通の会社と違って、
          <br />
          Social Contribution、社会貢献
          <br />
          ちゃん技術でよりいい社会のために動く会社だと思って。
          <br />
          かなり魅力を感じます。
          <br />
          <br />
          御社のホームページを見た、後社員のインタビューをみて
          <br />
          もしLinkxで働くことが叶うなら
          <br />
          新しい技術に触れたり、新しいことにチャレンジして成長する機会がたくさんあります。
          <br />
          それ以外も外国人の比率が高いでの、私も馴染みやすいと思って
          <br />
          決意して応募しました。
        </Answer>
      </section> */}

      <section id="siboudouki-bita">
        <Question id="siboudouki-bita">
          何故うちの会社?（志望動機---BitA）
        </Question>
        <Answer>
          私の志望動機は、三つあります。
          <br />
          <br />
          一つ目は、御社の「仲間と共に」の思いに共感しました。
          <br />
          ITエンジニアというキャリアにおいて、「個」の強さがよく強調されます。
          <br />
          しかし個人の能力は有限で、不足している部分を、仲間が
          <br />
          チームが、埋め合わすことができます。
          <br />
          チームワークは、よりいい結果をもたらす。
          <br />
          私はそう考えています。
          <br />
          <br />
          二つ目は、御社のプライム案件担当の比率が高く、
          <br />
          上流工程から携わる機会が多いと考えています。
          <br />
          このすぐれた環境でもっとエンジニアとしての経験を
          <br />
          積んでおきたいと思います。
          <br />
          <br />
          そして三つ目の原因は、
          <br />
          私の一番得意なスキル、リアクトが、
          <br />
          御社のこのポジションでで活かせると思います。
          <br />
        </Answer>
      </section>

      <section id="job-in-shiji">
        <Question id="job-in-shiji">
          前職、どのような責務を負っていますか？
        </Question>
        <Answer>
          前職について
          <br />
          前の会社、Shiji Information Technologyは
          <br />
          ホスピタリティ関連のIT soultionを提供する会社です
          <br />
          私はプログラマとして、R&Dチームに所属し、主な業務内容は
          <br />
          自社開発のプロダクト「infrasys Cloud POS」の一部
          <br />
          「テーブル管理システム」の継続的開発及び保守運用を担当しました
          <br />
          名前の通り、テーブルを管理するシステムですね
          <br />
          レストランの予約から、お客様のオーダー、メニューの管理とかの機能があります。
          <br />
          開発については、取引先の要望に応じて、新しい機能を追加するのがメインです。
          <br />
          それ以外もバグ修正、セキュリティ強化、技術的負債を何とかするとか。
          <br />
          特筆すべきことは、小規模ではありますが、フロントエンドのプロジェクトをリードする経験があります。
          <br />
        </Answer>
      </section>

      <section id="lead-project">
        <Question id="lead-project">
          リーダーとなって業務を推進したエピソードを教えてください。
        </Question>
        <Answer>
          そうですね
          <br />
          古いオンライン予約システムの技術的負債を処理するために
          <br />
          Vue.jsの導入をマネージャーに提案したところ、
          <br />
          するとすんなり許可されて、開発を任されました。
          <br />
          自分でもかなり意外でした。
          <br />
          技術の選定、システム詳細設計、そして実装までをリードし、
          <br />
          最後エンジニアたちの負担を上手く減らしました。
          <br />
          小さいプロジェクトではありますが、貴重な経験でした。
          <br />
        </Answer>
      </section>

      <section id="choice-of-tech">
        <Question id="choice-of-tech">技術の選定は何を基準にする？</Question>
        <Answer>
          技術の選定、例えばフロントエンドフレームワークの選定について
          <br />
          一番考慮(こうりょ)すべきのは
          <br />
          コミュニティのサイズです。
          <br />
          コミュニティが大きい方が、メンテナンスとコミュニティサポートがしっかりしてます。
          <br />
          そして次は客観的に、
          stateofjsとかの統計分析と、求人サイトでキーワードを検索して、業界のトレンドを研究します。
          <br />
          もしこの技術を使った場合、
          <br />
          同じくこの技術を使った経験がある人を雇う難易度を想定すること。
          <br />
          日本と違って、まともな研修がないのが殆どなので
          <br />
          新卒を雇う場合、習得の難易度も想定すべきです
          <br />
          最後は純粋に
          <br />
          フレームワークのパフォーマンス次第です
          <br />
          私の場合は、香港というか、中国においてvue.jsの方が支持率が圧倒的とはいかにが、とても高い
          <br />
          vue.jsの設計者本人Evan Youは中国人ですので
          <br />
          さらにフレームワーク自体、その背後に、big
          techからバックアップされていない。
          <br />
          開発もメンテナンスも完全にコミュニティの力だけで行う。
          <br />
          それなのに今は三大フレームワークと言われるほどまで成長してきました
          <br />
          <br />
          私がリーダーとして技術を選定する時、候補に幾つを考えました。
          <br />
          PHPと併用するので、とりあえずSPAを想定します。
          <br />
          個人的に理解のあるフレームワークはReact.js、Vue.js、Angular、svelte、この四つです。
          <br />
          React.jsはメインのプロジェクトでみんあ経験済みなので、論理的に考えばreactを選ぶのが一番無難でしょう。
          <br />
          しかし正直言うと、reactはかなり難しいフレームワークです。その開発思想が他三つのフレームワークと全然違う。
          <br />
          Functional
          componentsで、ちょっとした不注意で、パフォーマンスが落ちることがよくあります。
          <br />
          実際メインプロジェクトの「テーブル予約管理システム」のパフォーマンスもあまり宜しくなかった。
          <br />
          だからいっそうのこと、思いっきり、新しいフレームワークにしようと思いました。
          <br />
          Angularは難易度高いから論外。
          <br />
          svelteはパフォーマンスがいいけど、わかる人が少ないから同じく論外。
          <br />
          残りのvue.js、パフォーマンス良くて、分かりやすくて、新卒でもすぐ習得でき、だから決めました。
        </Answer>
      </section>
      <section id="react-pos-con">
        <Question id="react-pos-con">Reactの優/劣？</Question>
        <Answer>
          優:
          <br />
          一番優れた(優れた)部分はやはりその認知度とコミュニティサポート
          <br />
          何せ、背後にMETAとvercelといった大企業があります。
          <br />
          <br />
          劣： 欠点としは、他のフレームワークと比べてややこしい部分があります
          <br />
          functional componentのせいでい、色んなhooksを使わないといけない
          <br />
          特にobjectやarrayを更新する時、丸ごと更新しないといけないこと。
          <br />
          そしてthrottleやdebounceとか,
          <br />
          非同期処理が、useCallbackやuseMemoで保存しないと使えないことですね。
          <br />
          あとはCSSカプセル化できない部分かな。
          <br />
        </Answer>
      </section>

      <section id="strength">
        <Question id="strength">強みはなんですか？</Question>
        <Answer>
          私の強みは新しい知識に対する吸収力と自学自習の能力ですね。
          <br />
          前に務めてた二社ともプログラミングの研修が無くて
          <br />
          java以外の、履歴書に書いたスキルは殆どgoogleとyoutubeと
          <br />
          ソースコードを見ながら独学で会得したものです。
          <br />
          従って、例え業務上で私が未経験な新しい技術を
          <br />
          使う必要があるとしても問題ございません。
          <br />
          むしろ私にとって挑戦するがいがあります。
          <br />
          もちろん教える先輩がいればとても助かります。
          <br />
        </Answer>
      </section>

      <section id="weakness">
        <Question id="weakness">欠点は何ですか？</Question>
        <Answer>
          一番の欠点は、語彙力が足りない部分だと、私は思います。
          <br />
          話の内容を予め一度脳内でゆっくり整理しておかないといけないです。
          <br />
          これからも努力して改善するつもりです。
          <br />
        </Answer>
      </section>

      <section id="biggest-challenge">
        <Question id="biggest-challenge">
          これまでに直面した難題について教えてください。また、どのように解決しましたか？
        </Question>
        <Answer>
          そうですね。新卒の頃、初めての会社がスタートアップ会社で、
          <br />
          開発メンバーがかなり少ないでした。みんな忙しくて、研修とかもなくて、
          <br />
          業務を付いていけるようにも、自分でたくさん勉強しないといけないでした。
          <br />
          あの頃は大変でした。しかしあの頃があったからこそ、
          <br />
          今の自分は恐れることなく、未知な難題へ挑戦して、立ち向かえることができます。
          <br />
        </Answer>
      </section>

      <section id="success-fail">
        <Question id="success-fail">
          現職において、あなたの最大の成果（失敗）は何ですか？
        </Question>
        <Answer>
          成果：
          <br />
          最大の成果は、前職で、技術的負債を改善するために、新しい技術を導入することを提案したら、
          <br />
          上司と同僚、みんなから支持されて、研究と開発を任されたことです。
          <br />
          <br />
          失敗：
          <br />
          失敗については、大きなトラブルはないものの、小さいミスならありました。
          <br />
          例えば、プログラムの翻訳ミス、翻訳忘れ、或いは特定な条件で
          <br />
          機能が期待通りに動かないこととかです。
          <br />
          しかし大抵のミスはプロダクションに出せれる前に修正しました。
          <br />
        </Answer>
      </section>
      <section id="question">
        <Question id="question">何か聞きたいこと？</Question>
        <Answer>
          1.
          仮に私が内定もらえて、一か月後入社した場合、どんなプロジェクトを携わることになりますか？
          <br />
          <br />
          2. チームの雰囲気について知りたいです <br />
          <br />
        </Answer>
      </section>
      <section id="salary">
        <Question id="salary">希望年収</Question>
        <Answer>
          前職の年収額は312,000香港ドルです。
          <br />
          御社の求人に書いた年収範囲を希望致しますが、最終的には御社の規定に従います。
        </Answer>
      </section>
      <section id="time-available">
        <Question id="time-available">入社可能時期を教えてください</Question>
        <Answer>
          すぐ入社できると思いますが。
          <br />
          ビザの変更とかもありますので、内定貰えた一か月後がよろしいかと思います。
        </Answer>
      </section>
      <section id="other-interview">
        <Question id="other-interview">他社の選考状況を教えてください</Question>
        <Answer>
          今のところ、他に二社が面接の予定があります。
          <br />
          中に一社が二次面接となります。
          <br />
        </Answer>
      </section>
    </main>
  );
}
