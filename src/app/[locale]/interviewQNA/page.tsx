import IndexBar from "@/components/IndexBar";
import { Answer, Highlight, Question } from "@/components/QNA";
import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

function JPQNA() {
  return (
    <main className="flex flex-col items-center py-8 px-4 sm:p-20 md:p-24 font-sans relative text-lg md:text-xl">
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
          リアクトJS、ヴューJS、アングラー、そしてネックスJSなど、
          <br />
          様々なJavaScriptフレームワークでの開発経験がございます。
          <br />
          例え全く触ったことがないフレームワークでも
          <br />
          短時間以内習得できる自信があります。
          <br />
          <br />
          3人チームではありますが、フロントエンドのプロジェクトをリードする経験があり
          <br />
          チームのリーダーとして技術の選定から実装まで担当してきました。
          <br />
          <br />
          <br />
          バックエンドにおいては、
          <br />
          Java Spring BootおよびケーキPHPを用いた
          <br />
          RESTful APIの開発経験もございます。
          <br />
          <br />
          それ以外も、既に日本語検定試験1級を取得しており、
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
          一回目の転職：
          <br />
          新卒入社した会社が、二次受けの受託開発がメイン、プロジェクトが終わったら、
          <br />
          運用保守とか一切なくて、本当に終わりました、という感じで
          <br />
          毎回終わった後すぐに次のプロジェクトへ移行しました。
          <br />
          そこで、自分が実際何かを作った感覚がしっかり来なかったです。
          <br />
          だから、自社サービスがある会社に転職したいと思って、次の会社に転職しました。
          <br />
          そして、次の会社、主に自社サービス開発ですので、同じプロダクトを携わることになります。
          <br />
          自分が作った新しい機能とか、UIとか、お客様、クライアントですね、
          <br />
          ちゃんと使用した感想とか、feedbackがあります
          <br />
          そのfeedbackをもとづいて、さらに改善する、よりいいサービスを提供することができます。
          <br />
          ちゃんと自分が一つのサービスを、製品を、開発している感じがします。
          <br />
          <br />
          <br />
          二回目の転職：
          <br />
          私が転職した理由は、日本にくる機会があったからです。
          <br />
          若いうちに、故郷を離れて、日本という新しい環境でチャレンジしたいので、離職しました。
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
      {/* <section id="siboudouki-wamazing">
        <Question id="siboudouki-wamazing">
          何故うちの会社?（志望動機---wamazing）
        </Question>
        <Answer>
          私の志望動機は、御社でなら
          <br />
          自社のサービスを全般に携われるのが魅力的ですね
          <br />
          特に「ほうにち外国人向けのサービス」ということで
          <br />
          つまり世界中の人々から使われるサービス
          <br />
          対象は全世界で、とにかく凄い。まさに自分がやりたかったことです。
          <br />
          （先ほど申した通り）私は自分が作ったサービスが、
          <br />
          BtoBではなく、BtoCで、色んな人に使われたです。
          <br />
        </Answer>
      </section> */}

      <section id="siboudouki-play">
        <Question id="siboudouki-play">
          何故うちの会社?（志望動機---play）
        </Question>
        <Answer>
          私の志望動機は、割と単純ですね
          <br />
          今までずっと見る側、サービスを使う側として
          <br />
          生きていきたのですが
          <br />
          Huluとか、Disney+とか、ネットフリックスとか、らにいえばニコニコ動画とyoutubeみたいなサービス
          <br />
          動画配信サービスは日常生活に溶け込んで、今じゃもう当たり前の存在になりました。
          <br />
          使う側として、動画配信の魅力がよくわかります。
          <br />
          実際に開発を携われる側になってみたい気持ちを持つ人間、たぶん私以外にも、たくさんいますね。
          <br />
          しかし関与したい気持ちがあるとしても、そう簡単に入れる業界ではないです。
          <br />
          実際香港に居た頃、こういう配信サービスを提供する会社殆どございませんでした。
          <br />
          唯一の一社、viuTVという会社ですが、
          <br />
          新卒の頃応募しましたが、面接の機会もありませんでした。あとで調べたら、新卒は雇わない会社らしいです。
          <br />
          本来なら経験を積んで、もう一度挑戦しようと思いましたが、
          <br />
          しかし今現在、私は日本に居ます、そして日本での暮らしも <br />
          気に入りましたの、暫く、数年以内は香港に帰って仕事をするつもりはないです。
          <br />
          そこで仕事探すために、色んな求人サイトで検索しましたが、偶然に御社の求人を見つけまして、
          <br />
          丁度動画配信サービスサービスの開発が仕事なの、応募しました。
          <br />
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
          {/* 古いオンライン予約システムの技術的負債を処理するために */}
          きっかけは、お客様の要望で、オンライン予約システムに新しい機能を追加が必要で、
          <br />
          当時の担当は丁度私です。
          <br />
          シンプルなダイアログメニューですが、ちょっとしたinteractive要素が必要で
          <br />
          jQueryのままでもできますが、
          <br />
          この先がもっと似たような、interactive要素が必要な、新しい機能を追加する可能性を考えて
          <br />
          jqueryの技術的負債の処理も含めて、
          <br />
          Vue.jsの導入をマネージャーに提案したところ、
          <br />
          「いいよ」ってするとすんなり許可されて、開発を任されました。
          <br />
          自分でもかなり意外でした。
          <br />
          それから三人チームのリーダーとして、技術の選定、システム詳細設計、そして実装まで携わっておりました、
          {/* <br />
          最後エンジニアたちの負担を上手く減らしました。 */}
          <br />
          小規模なプロジェクトではありますが、貴重な経験でした。
          <br />
        </Answer>
      </section>

      <section id="self-product-important">
        <Question id="self-product-important">
          自社サービス（プロダクト）の開発において、どんなことが特に重要だと感じていますか？
        </Question>
        <Answer>
          一番大事なのは、ユーザーの視点に立つことですね。
          <br />
          開発者の角度ではなくて、もし自分がユーザーならどう思うか
          <br />
          開発者って理解力がいい人が多いです。
          <br />
          彼らにとって、分かり切ったことは、一目瞭然なことが、
          <br />
          一般人にとって、必ずしも同じように見えるわけじゃないです。
          <br />
          だからUIUXにおいて、目指すのは「誰でも簡単に使いこなせる」UXですね。
          <br />
          それ以外も、サービスの提供対象、例えば国や地域、年齢層とかで、適切なデザインやサービスを提供すること。
          <br />
        </Answer>
      </section>

      {/* <section id="komatta">
        <Question id="komatta">
          userとして地方に行ったときは困ったことはありますか?
        </Question>
        <Answer>
          そうですね。実は今年日本に来る時、宿の予約で、初めてagodaというサービスを使いました。
          <br />
          アカウントは、直接googleのアカウントを使うことができます。
          <br />
          便利だと思いますが、そこで問題発生。
          <br />
          私のgoogleアカウントの名前は本名じゃないです。
          <br />
          予約を取る時そのまんまで、
          <br />
          提示も警告もありませんでした
          <br />
          予約を取った後、登録情報を見てようやく気付いました。
          <br />
          そこで慌ててカスタマーサービスに連絡くして、
          <br />
          一週間かけてようやく本名に変更できました。
          <br />
        </Answer>
      </section> */}

      {/* <section id="suggest-service">
        <Question id="suggest-service">
          海外向けのユーザーにどのようなサービスが将来性ありそうなのか？
        </Question>
        <Answer>
          外国人の私から見ると、海外旅行で一番困った部分はやはり言語です。
          <br />
          将来性というか、現状でもかなり不足してるのが、翻訳アプリですね。
          <br />
          openAIのgptが発表される前の、つまり去年ですね。全ての翻訳アプリがダメです。
          <br />
          翻訳間違いは勿論として、翻訳スピードも遅いのが一般的な印象。
          <br />
          実際9割人がgoogle翻訳を使います。比較的に新しいのがdeepLですね。
          <br />
          それ以外、gptを使用した翻訳アプリは、まあ多数あると思いますが、
          <br />
          外国人の私が思い当たるアプリが殆どないのが現状です。
          <br />
          だから観光客向けの翻訳アプリは現在でも充分将来性があります。
        </Answer>
      </section> */}

      {/* <section id="value-wamazing">
        <Question id="value-wamazing">wamazingのmission/valueについて</Question>
        <Answer>
          【ミッションに関して】
          <br />
          感動の提供
          <br />
          私が思うには、日本の良さはその多様性と深い文化にあると感じています。
          <br />
          私は日本の風景、食事、歴史、そして流行などが融合した文化が魅力の根本になると考えています。
          <br />
          実際私も日本が好きで日本に来た外国人のひとりですので、
          <br />
          地域の隠された魅力と共にこれらを驚きと感動として観光客に伝え、
          <br />
          彼らに日本の魅力を体験させることができるようなサービスを提供して、
          <br />
          それと同時に、日本の地域経済の再こうにも力を貸すことができて素晴らしいと思っています。
          <br />
          (日本のどんなところが好き？)
          <br />
          (一番好きなのは食事ですね。日本の代表的な食べ物といえばお寿司かもしれませんが、)
          <br />
          (私は牛丼が大好きです。安くて美味い。松屋さん、吉野家さん、すき家さんとか毎日ローテーションで食べるくらいです。)
          <br />
          <br />
          【バリューに関して】
          <br />
          サービス提供について：
          <br />
          観光客って日本語わからない方が殆どですので、
          <br />
          技術を通して、多言語で、確かな情報を提供することが
          <br />
          観光客が日本を安心して楽しむことができる環境を整うのが重要と思います。
          <br />
          観光客って日本語わからない方が殆どですので、正確かつ新しい提供
          <br />
          <br />
          【カルチャーに関して】
          <br />
          学びについて：
          <br />
          仕事の中で、ユーザーエクスペリエンスを向上させるために様々な工夫をこらしてきました。
          <br />
          例えば、過去のプロジェクトではユーザーフィードバックを積極的に取り入れ、機能やデザインの改善に取り組みました。
          <br />
          まいつきのレストランの予約数を統計するカレンダーですが、元の設計では字だらけで、要領が分かり辛いでした。
          <br />
          そこでもっとシンプルなUIを追加して、さらに直接カレンダーで予約することを可能にして、お客様の要望を答えました。
          <br />
          ユーザーが本当に求めるものを理解し、
          <br />
          ユーザーの期待をうわ回るサービスを提供するために、常に学び続ける姿勢も重要だと思います。
          <br /> <br />
        </Answer>
      </section> */}

      <section id="value-play">
        <Question id="value-play">playのvalueについて</Question>
        <Answer>
          THINK USERS
          <br />
          お客様の先にいるユーザーを意識したサービス、プロダクトづくりを大切にします。
          <br />
          <br />
          IMPROVE
          <br />
          現状に満足せず、もっと良くなるにはどうしたら良いかを常に考え改善します。
          <br />
          <br />
          FAIRNESS
          <br />
          自身にも、またあらゆるステイクホルダーに対しても、誠実に公正に向き合います。
          <br />
          <br />
          ANTENNA
          <br />
          新しい情報に対するアンテナをいつも張り巡らせ、良いと思うものは積極的に取り入れます。
          <br />
          <br />
          OWNERSHIP
          <br />
          あらゆることを自分ごととして捉え、様々な問題や課題に主体性と責任を持って取り組みます。
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
          svelteはパフォーマンスがいいけど、わかる人が少ないから不採用。
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
          コミュニティが大きくて、ライブラリが充実のところですね
          <br />
          劣： 欠点としは、他のフレームワークと比べてややこしい部分があります
          <br />
          functional componentのせいでい、色んなhooksを使わないといけない
          <br />
          特にobjectやarrayを更新する時、丸ごと更新しないといけない部分ですね。
          <br />
          そして非同期処理が、useCallbackやuseMemoで保存しないといけないことですね。
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
          1.御社のサイトを見て、一点気になることがございます。
          <br />
          英語と中国語（台湾ですね）のサイトがございますが、直接言語を変更できないですね。
          <br />
          今後、言語をスイッチする機能を追加する予定とかありますか？
          <br />
          <br />
          2. チームの雰囲気について知りたいです <br />
          <br />
          3. 開発チームの一日のスケジュールが気になります <br />
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
          今のところ、一社が内定、二社が結果待ち、二社が面接が一次面接待ち
          <br />
        </Answer>
      </section>
    </main>
  );
}

function ENQNA() {
  return (
    <main className="flex flex-col items-center py-8 px-4 sm:p-20 md:p-24 font-sans relative text-sm md:text-xl">
      <IndexBar />

      <section id="greetings">
        <Question id="greetings">挨拶</Question>
        <Answer>
          {`Hello, nice to meet you. I'm Wong, or you can call me Anthony.`}
        </Answer>
      </section>

      <section id="self-intro">
        <Question id="self-intro">Self Intro</Question>
        <Answer>
          {`Allow me to introduce myself.
            \n
            I am Anthony, originally from Hong Kong. I earned a degree in Information Engineering from City University of Hong Kong, with a minor in Japanese Studies.
            \n
            After I graduated, I began working at Appicidea IT Solutions, a growing startup specializing in subcontracting projects.  
            \n
            There, I gained hands-on experience in full-stack development using Java Spring Boot, Angular, React.js, and React Native.
            \n 
            Later, I had the opportunity to work in Shiji Information Technology, a global IT company serving the hospitality sector. \n
            I contributed to the full-stack development of a SaaS product known as the "Table Management System", working with framworks such as React.js, Vue.js, and CakePHP. \n
            In my private time, I love to stay close with tech innovations and enjoy learning new concepts.  
            \n
            Recently, I am exploring the newly released features of Next.js.
            \n 
            I hope I can make a meaningful contribution to the team at Linkx, learn and grow simultaneously.
            \n 
            Thank you.
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")}
        </Answer>
      </section>

      <section id="pr">
        <Question id="pr">自己PRお願いします</Question>
        <Answer>
          {`
          `}
        </Answer>
      </section>
      <section id="university">
        <Question id="university">University</Question>
        <Answer>
          {`About the degree, Information Engineering,\n
            It contains subjects of computer science,\n
            like programming, data structure, database, os, plus some networking and signal related subject\n
            and there are some modern technology course like teaching aws and web programming framework (java springboot)
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")}
        </Answer>
      </section>

      <section id="reason-of-resign">
        <Question id="reason-of-resign">Reason of Resignation</Question>
        <Answer>
          {/* {`In my first job, as a fresh graduate,\n
            I was looking for a nurturing and instructive environment \n
            to kickstart my career. \n
            Although they offered good projects,\n
            I found that the learning opportunities are limited \n
            due to the lack of on-job training and code reviews.\n
            Therefore, I decided to move on to a workspace\n
            that offered more supportive learning benefits.\n
            In the second company,\n
            I appreciated the positive culture at Shiji,\n
            with approachable seniors \n
            and strong emphasis on mentorship.\n
            Ironically, I hadn't planned on leaving. \n
            However, an unexpected opportunity arose in late April this year.\n
            when the Japanese Government introduced a new visa scheme.\n
            I saw this as a unique chance, \n
            because I always wanted to live in Japan.\n
            So, After a month of consideration, \n
            I applied for it and subsequently resigned from Shiji \n
            following the visa approval. 
          `.split("\n")
          .map((t) => t.trim()).join('\n')} */}
          In my <Highlight>first job</Highlight>, as a{" "}
          <Highlight>fresh graduate</Highlight>,
          <br />I was{" "}
          <Highlight>
            looking for a nurturing and instructive environment
          </Highlight>
          <br />
          to start my career.
          <br />
          <br />
          Although <Highlight>they offered good projects,</Highlight>
          <br />I found that the <Highlight>
            learning opportunities
          </Highlight>{" "}
          are <Highlight>limited</Highlight>
          <br />
          due to the{" "}
          <Highlight>lack of on-job training and code reviews</Highlight>.
          <br />
          <br />
          Therefore, I decided to <Highlight>move on</Highlight> to a workspace
          <br />
          that <Highlight>offered</Highlight> more{" "}
          <Highlight>supportive learning benefits</Highlight>.
          <br />
          <br />
          In the <Highlight>second company</Highlight>,
          <br />I appreciated the <Highlight>positive culture</Highlight> at
          Shiji,
          <br />
          with <Highlight>approachable seniors</Highlight>
          <br />
          and <Highlight>strong emphasis</Highlight> on{" "}
          <Highlight>mentorship</Highlight>.
          <br />
          <br />
          Ironically, <Highlight>I hadn&apos;t planned to leave</Highlight>.
          <br />
          but, an <Highlight>unexpected opportunity arose</Highlight> in late
          April this year.
          <br />
          when the Japanese Government introduced a{" "}
          <Highlight>new visa scheme</Highlight>.
          <br />I saw this as a unique <Highlight>chance</Highlight>,
          <br />
          because I <Highlight>always wanted to live in Japan</Highlight>.
          <br />
          So, After a month of <Highlight>consideration</Highlight>,
          <br />I <Highlight>applied</Highlight> for it and{" "}
          <Highlight>subsequently resigned</Highlight> from Shiji
          <br />
          <Highlight>following the visa approval</Highlight>.
        </Answer>
      </section>
      <section id="reason-to-japan">
        <Question id="reason-to-japan">Why come to Japan?</Question>
        <Answer>
          {`just like many other foreigner, I love japanese subculture like anime and comic\n
            and is planning to live in Japan in the future.\n
            But it is quite difficult to apply japanese job oversea\n
            Surprisingly, the japanese government launched the new visa programme\n
            I saw this as a good chance and applied.
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")}
        </Answer>
      </section>
      <section id="sep-to-nov">
        <Question id="sep-to-nov">
          What have done from September to November?
        </Question>
        <Answer>
          {/* {`The time from September to November has been a transition period for me.\n
            September was mainly about setting up my life in Japan - \n
            from addressing housing needs to obtaining essential daily supplies. \n
            Even though I had already secured a place before my arrival in Japan, \n
            there were other things like purchasing furniture, \n
            getting a local mobile number, setting up a bank account, \n
            and registering as a resident. \n
            I also seek for advice from friends already living in Japan \n
            to ensure a smooth transition.\n
            \n
            In October, I decided to relocate to a more spacious apartment. \n
            My previous place was a single-room apartment in Bunkyouku,\n
            which, although having a small room size, it had a relatively high rental. \n
            I spent a month to find a more suitable option, \n
            finally moving to Edogawaku, Nakakasai, as per one of my friend's recommendation.\n
            \n
            Once everything was in place, \n
            I preparde myself and started my job searching. \n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          The time from September to November has been a
          <Highlight>transition period for me.</Highlight>
          <br />
          September was mainly about
          <Highlight>setting up my life in Japan</Highlight> -
          <br />
          from <Highlight>addressing housing needs</Highlight> to getting
          <Highlight>essential daily supplies</Highlight>.
          <br />
          Even though I had already
          <Highlight>secured a place before my arrival in Japan</Highlight>,
          <br />
          there were <Highlight>other things</Highlight> like
          <Highlight>purchasing furniture</Highlight>,
          <br />
          getting a <Highlight>local mobile number</Highlight>, setting up a
          <Highlight>bank account</Highlight>,
          <br />
          and <Highlight>registering as a resident</Highlight>.
          <br />I also <Highlight>seek for advice from friends</Highlight>
          already living in Japan
          <br />
          to <Highlight>ensure a smooth transition</Highlight>.
          <br />
          <br />
          In October, I decided to
          <Highlight>relocate to a more spacious apartment</Highlight>.
          <br />
          My previous place was a single-room apartment in Bunkyouku,
          <br />
          which, although having a <Highlight>small room size</Highlight>, it
          had a relatively <Highlight>high rental.</Highlight>
          <br />
          I spent a month to find a more suitable option,
          <br />
          finally <Highlight>moving to Edogawaku, Nakakasai</Highlight>, as
          recommended by one of my friend
          <br />
          Once <Highlight>everything was in place,</Highlight>
          <br />
          <Highlight>I prepare myself and started my job searching.</Highlight>
          <br />
        </Answer>
      </section>
      <section id="siboudouki-linkx">
        <Question id="siboudouki-linkx">
          why our company? (志望動機---Linkx)
        </Question>
        <Answer>
          {/* {`I saw Linkx has developed an AI application called "SHIKAI", \n
            which provide service for visually impaired people.\n
            I always think that technology should be used for a better and more convenient world.\n
            I believe that Linkx is a company that really cares about the society.\n
            \n
            Although I was initially attracted to Linkx\n
            because of this remarkable "SHIKAI" project, \n
            my interest get deeper as I learned more about the current focus. \n
            I believe that fintech and lab automation are essential and exciting fields\n
            that can also create significant impact on society directly or indirectly \n
            by digital transforming finance and research.\n
            I see a great opportunity here to expand my knowledge and skills\n
            in these cutting-edge areas.\n
            I believe that Linkx is a perfect environment for me\n
            to learn more, challenge more and grow with the team.\n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          I saw Linkx has developed an{" "}
          <Highlight>AI application called &quot;SHIKAI&quot;</Highlight>,
          <br />
          which provide service for{" "}
          <Highlight>visually impaired people</Highlight>.
          <br />I always think that{" "}
          <Highlight>
            technology should be used for a better and more convenient world
          </Highlight>
          .
          <br />I believe that Linkx is a <Highlight>
            company
          </Highlight> that{" "}
          <Highlight>really cares about the society</Highlight>.
          <br />
          <br />
          Although I was <Highlight>initially</Highlight> attracted to Linkx
          <br />
          because of this{" "}
          <Highlight>remarkable &quot;SHIKAI&quot; project</Highlight> ,
          <br />
          my <Highlight>interest get deeper</Highlight> as I learned more about
          the <Highlight>current focus</Highlight>.
          <br />I believe that <Highlight>fintech</Highlight> and{" "}
          <Highlight>lab related solutions</Highlight> are{" "}
          <Highlight>essential</Highlight> and exciting fields
          <br />
          that can also{" "}
          <Highlight>
            create significant impact on society directly or indirectly
          </Highlight>
          <br />
          by{" "}
          <Highlight>
            digital transforming the old way of finance and research
          </Highlight>
          .
          <br />I see <Highlight>a great opportunity here</Highlight> to{" "}
          <Highlight>enrich my knowledge and skills</Highlight>
          <br />
          in these <Highlight>cutting-edge areas</Highlight>.
          <br />I believe that Linkx is{" "}
          <Highlight>a perfect environment</Highlight>
          <br />
          to <Highlight>learn more</Highlight>,{" "}
          <Highlight>challenge more</Highlight> and{" "}
          <Highlight>grow with the team together</Highlight>.
        </Answer>
      </section>
      <section id="exp">
        <Question id="exp">
          Do you have any experience in fintech or lab automation?
        </Question>
        <Answer>
          {/* {`My primary experience is in general development \n
            rather than specific sectors like fintech or lab automation. \n
            However, I'm always eager to learn and adapt to new technology and sectors.\n
            Given the mentorship and talented team here, \n
            particularly individuals like Pulkit, who guided me in the last interview.\n
            I'm confident that I would contribute and grow quickly in these areas.\n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          My <Highlight>primary experience</Highlight> is in{" "}
          <Highlight>general development</Highlight>
          <br />
          rather than <Highlight>specific sectors</Highlight> like fintech or
          lab automation.
          <br />
          <br />
          However,
          <Highlight>
            I&apos;m always eager to learn and adapt to new technology and
            sectors.
          </Highlight>
          <br />
          Given the <Highlight>mentorship and talented team here</Highlight>,
          <br />
          <Highlight>
            particularly individuals like Pulkit, who guided me in the last
            interview.
          </Highlight>
          <br />
          I&apos;m confident that I would <Highlight>
            contribute
          </Highlight> and <Highlight>grow quickly</Highlight> in these areas.
        </Answer>
      </section>
      <section id="different-senior">
        <Question id="different-senior">
          what if you are assigned to a different senior engineer
        </Question>
        <Answer>
          {/* {`While I had a positive interaction with Pulkit, \n
            I believe that everyone in your team has valuable experience and skills to share. \n
            If I have the opportunity to work with another senior engineer, \n
            I would embrace that chance. \n
            In the end, it's all about the team and the values of the company\n
            that make it great a place to work rather than a single individual.
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          While I had a <Highlight>positive interaction</Highlight> with
          <Highlight>Pulkit</Highlight>,
          <br />I believe that
          <Highlight>
            everyone in your team has valuable experience and skills to share.
          </Highlight>
          <br />
          If I have the <Highlight>opportunity</Highlight> to
          <Highlight>work with others</Highlight> talented engineer,
          <br />I would <Highlight>embrace that chance and learn</Highlight>.
          <br />
          In the end,
          <Highlight>
            it&apos;s all about the team and the values of the company
          </Highlight>
          <br />
          that <Highlight>make it great a place to work</Highlight> rather than
          a <Highlight>single individual</Highlight>.
        </Answer>
      </section>

      <section id="job-in-shiji">
        <Question id="job-in-shiji">
          What were your responsibilities in your previous job?
        </Question>
        <Answer>
          {/* {`In my role at Shiji Information Technology, \n
            I was primarily responsible for enhancing our existing application\n
            by adding new features as per client requirements.\n
            In addition to the development of new functionalities,\n
            my duties also included troubleshooting and fixing bugs,\n
            patching security loopholes,\n
            and addressing technical debt within older parts of the products.
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          In my role at Shiji Information Technology,
          <br />I was primarily responsible for
          <Highlight>enhancing our existing application</Highlight>
          <br />
          by <Highlight>adding new features</Highlight> as per
          <Highlight>client requirements</Highlight>.
          <br />
          In addition to the development of new functions,
          <br />
          my duties also included
          <Highlight>troubleshooting and fixing bugs</Highlight>,
          <br />
          <Highlight>patching security loopholes</Highlight>,
          <br />
          and <Highlight>addressing technical debt</Highlight> within older
          parts of the products.
          <br />
        </Answer>
      </section>

      <section id="lead-project">
        <Question id="lead-project">
          Can you tell me about a project that you have led?
        </Question>
        <Answer>
          {/* {`Sure,\n
            One of the most fulfilling projects I got to lead was a mini-renewal project\n
            to tackle some of the technical debt. 
            I had the opportunity to integrate vue.js\n
            into our existing online reservation page.\n
            \n
            Initially We received a request from a client \n
            to add new features to the old reservation page.\n
            I was given the responsibility of handling this task. \n
            Upon assessment, I noticed that current code base, \n
            particularly the frontend, \n
            was rather outdated and messy, making it difficult to navigate and debug.\n
            \n
            Realizing the existing technical debt,\n
            I recommended to my managers that we consider updating it\n
            by adding a new framework to improve the maintainability \n
            and enable future growth.\n
            Thankfully, they agreed, 
            and I was provided the opportunity\n
            to lead the mini-renewal project.\n
            Studying feasible technical stacks, \n
            designing program structure, and implementing it.\n
            And for difficulties that I was not able to solve alone,\n
            I seeked advices from the seniors.\n
            I have learnt a lot in the process. \n
            \n
            This task not only improved the functionality of the product \n
            but also offered me a chance to expand my development skills.\n
            It was an enlightening experience that reinforced my understanding of \n
            the importance of writing clean and maintainable code. \n
            I am grateful to have had the opportunity to lead this small project and learn from it.\n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          Sure,
          <br />
          One of the most fulfilling projects I got to lead was a{" "}
          <Highlight>mini-renewal project</Highlight>
          <br />
          to tackle some of the <Highlight>technical debt</Highlight>. I had the
          opportunity to
          <Highlight>
            integrate vue.js into our existing online reservation page.
          </Highlight>
          <br />
          Initially We received a request from a client
          <br />
          to <Highlight>add new features</Highlight> to the old reservation
          page.
          <br />I was given the
          <Highlight> responsibility of handling </Highlight>this task.
          <br />
          Upon assessment, I noticed that{" "}
          <Highlight>current code base,</Highlight>
          <Highlight>particularly the frontend,</Highlight>
          <br />
          was rather <Highlight>outdated and messy</Highlight>, making it
          difficult to <Highlight>navigate and debug.</Highlight>
          <br />
          <br />
          Realizing the <Highlight>existing technical debt</Highlight>,
          <br />I <Highlight>recommended to my managers</Highlight> that
          consider updating it
          <br />
          by <Highlight>adding a new framework</Highlight> to improve the{" "}
          <Highlight>maintainability</Highlight>
          <br />
          and <Highlight>enable future growth</Highlight>.
          <br />
          Suprisingly I was provided the <Highlight>opportunity</Highlight>
          <br />
          to <Highlight>lead the mini-renewal project</Highlight>.
          <br />
          <Highlight>Studying feasible technical stacks,</Highlight>
          <br />
          <Highlight>
            designing program structure, and implementing it.
          </Highlight>
          <br />
          And for <Highlight>difficulties</Highlight> that I was{" "}
          <Highlight>not able to solve alone</Highlight>,
          <br />I <Highlight>seeked advices from the seniors</Highlight>.
          <br />
          <br />
          This task not only improved the functionality of the product
          <br />
          but also offered me a chance to expand my development skills.
          <br />
          It was an enlightening experience that reinforced my understanding of
          <br />
          the importance of writing clean and maintainable code.
          <br />
          <Highlight>
            I am grateful to have had the opportunity to lead this small project
            and learn from it.
          </Highlight>
        </Answer>
      </section>

      <section id="choice-of-tech">
        <Question id="choice-of-tech">技術の選定は何を基準にする？</Question>
        <Answer></Answer>
      </section>
      <section id="react-pos-con">
        <Question id="react-pos-con">Reactの優/劣？</Question>
        <Answer></Answer>
      </section>

      <section id="strength">
        <Question id="strength">what is your strength?</Question>
        <Answer>
          {/* {`One of my strength is my willingness to embrace challenges and learn new things. \n
           Whether it's in my professional life or my personal life, \n
           I see every challenge as an opportunity to grow. \n
           \n
           Take programming, for instance.  \n
           When I first graduated, my programming knowledge was limited to C++ and Java only. \n
           But I knew that continuous learning is important in the technology world.  \n
           Therefore, I kept an open mind and progressively \n
           adapted to technologies and programming languages  \n
           that are required by my job, \n
           and even took on the challenge of leading a minor project. \n
           \n
           On the personal side,  \n
           moving to Japan alone was a step outside my comfort zone.  \n
           In Japan, being a foreigner here is always a challenge. \n
           but I find it both fun and exciting. \n
           I believe it's important to learn and grow from each challenge we face. \n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          One of my strength is{" "}
          <Highlight>
            my willingness to embrace challenges and learn new things.
          </Highlight>
          <br />
          Whether it&apos;s in my <Highlight>professional life</Highlight> or my{" "}
          <Highlight>personal life</Highlight>,
          <br />I{" "}
          <Highlight>see every challenge as an opportunity to grow</Highlight>.
          <br />
          <br />
          Take <Highlight>programming, for instance</Highlight>.
          <br />
          When I first graduated,{" "}
          <Highlight>my programming knowledge was limited</Highlight> to C++ and
          Java only.
          <br />
          But I knew that{" "}
          <Highlight>
            continuous learning is important in the technology world.
          </Highlight>
          <br />
          Therefore, I <Highlight>kept an open mind</Highlight> and{" "}
          <Highlight>progressively adapted to technologies</Highlight>
          <br />
          that are <Highlight>required by my job</Highlight>,
          <br />
          <br />
          On the <Highlight>personal side</Highlight>,
          <br />
          <Highlight>
            moving to Japan alone was a step outside my comfort zone.
          </Highlight>
          <br />
          In Japan,{" "}
          <Highlight>being a foreigner here is always a challenge.</Highlight>
          <br />
          but I <Highlight>find it both fun and exciting</Highlight>.
          <br />I believe it&apos;s{" "}
          <Highlight>
            important to learn and grow from each challenge
          </Highlight>{" "}
          we face.
        </Answer>
      </section>

      <section id="weakness">
        <Question id="weakness">what is your weakness?</Question>
        <Answer>
          {/* {`One area I want to improve on is multitasking.\n
            I am someone who prefers to concentrate on one project at a time\n
            to ensure its quality,\n
            but I understand that the real working environment often requires mult-tasking. \n
            To deal with it, I've started to work on task management strategies, \n
            using tools to organize my workflow, and consistently remind myself \n
            to switch tasks and monitor progress. \n
            While I'm still enhancing this skill, \n
            I've seen improvements and will continue to work on it \n
            to be more efficient and adaptable.\n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          One area I want to improve on is <Highlight>multitasking</Highlight>.
          <br />I am someone who{" "}
          <Highlight>
            prefers to concentrate on one project at a time
          </Highlight>{" "}
          to ensure its <Highlight>quality</Highlight>,
          <br />
          <br />
          but I understand that the{" "}
          <Highlight>real working environment</Highlight> often{" "}
          <Highlight>requires mult-tasking.</Highlight>
          <br />
          <br />
          To deal with it, I&apos;ve started to work on{" "}
          <Highlight>task management strategies</Highlight>, using tools like{" "}
          <Highlight>task scheduler</Highlight> to
          <Highlight>organize my workflow</Highlight>, and remind myself to{" "}
          <Highlight>switch tasks and monitor progress.</Highlight>
          <br />
          <br />
          While I&apos;m still enhancing this skill,
          <br />
          I&apos;ve seen improvements and will continue to work on it to be more
          efficient and adaptable.
        </Answer>
      </section>

      <section id="pressure-deadline">
        <Question id="pressure-deadline">
          How do you work under pressure or tight deadlines
        </Question>
        <Answer>
          {/* {`I understand that chasing deadlines are a part of the job, \n
            especially in an innovative and fast-paced industry like fintech.\n
            In such situations, I prioritize my work, \n
            ensure which task is more important and should be done first.\n
            Also having clear communication with teamates, \n
            and do not hesitate to ask for help from them.\n
            helping each other efficiently generally produce a better result.
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          I understand that{" "}
          <Highlight>chasing deadlines are a part of the job</Highlight>,
          especially{" "}
          <Highlight>in an innovative and fast-paced industry</Highlight> like
          fintech.
          <br />
          <br />
          In such situations, I <Highlight>prioritize my work</Highlight>,
          <br />
          ensure{" "}
          <Highlight>
            which task is more important and should be done first
          </Highlight>
          .
          <br />
          Also <Highlight>having clear communication with teamates</Highlight>,
          <br />
          and <Highlight>do not hesitate to ask for help</Highlight> from them.
          <br />
          <Highlight>
            helping each other efficiently generally produce a better result.
          </Highlight>
        </Answer>
      </section>

      <section id="keepup-changes">
        <Question id="keepup-changes">
          How do you keep up with changes and advancements in technology
        </Question>
        <Answer>
          {/* {`Technology is always evolving and staying updated is a necessity in our field. \n
            I regularly read technology-focused blogs and news to keep it up. \n
            One way that can effectively let tech new around your daily life is, \n
            subscribing those tech media in social networking site like facebook and twitter. \n
            then even during your private time, maybe taking a break,\n
            those news come into your eyes \n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          Technology is always evolving and staying updated is a necessity in
          our field.
          <br />I{" "}
          <Highlight>
            regularly read technology-focused blogs and news
          </Highlight>{" "}
          to keep up with the latest trend.
          <br />
          One way that can{" "}
          <Highlight>
            effectively let tech new around your daily life
          </Highlight>{" "}
          is,
          <br />
          <Highlight>
            subscribing those tech media in social networking site
          </Highlight>{" "}
          like facebook and twitter.
          <br />
          then even during your private time, maybe taking a break,
          <br />
          those news come into your eyes
        </Answer>
      </section>

      <section id="explain-tech">
        <Question id="explain-tech">
          Can you explain a technical concept or process in a way that a
          non-technical person can understand?
        </Question>
        <Answer>
          {/* {`It's crucial to communicate effectively to non-technical stakeholders.  \n
            Usually using real life example or a similar situation to metaphor the that will works. \n
            For example, let's consider the concept of machine learning.  \n
            It's similar to teaching a child how to walk.  \n
            Firstly, the child observes and learns from adult,  \n
            then it tries and falls many times,  \n
            but after each fall, it improves until it is finally able to walk. \n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          It&apos;s{" "}
          <Highlight>
            crucial to communicate effectively to non-technical stakeholders.
          </Highlight>
          <br />
          Usually{" "}
          <Highlight>
            using real life example or a similar situation to metaphor
          </Highlight>{" "}
          will works pretty well.
          <br />
          For example, let&apos;s consider the concept of machine learning.
          <br />
          It&apos;s similar to teaching a child how to walk.
          <br />
          Firstly, the child observes and learns from adult,
          <br />
          then it tries and falls many times,
          <br />
          but after each fall, it improves until it is finally able to walk.
          <br />
        </Answer>
      </section>

      <section id="handle-conflict">
        <Question id="handle-conflict">
          How would you address disagreement or conflict in your team?
        </Question>
        <Answer>
          {/* {`Healthy disagreement is a part of teamwork \n
            and is often a source of creative ideas.  \n
            When dealing with such situations,  \n
            I believe that communicating openly,  \n
            listening patiently to understand the other's point of view,  \n
            and then rationally discussing should the best choice of action.  \n
            It's important to keep the main goal in mind  \n
            and respect everyone's perspectives. \n
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")} */}
          <Highlight>Healthy disagreement</Highlight> is a{" "}
          <Highlight>part of teamwork</Highlight>
          <br />
          and is often a <Highlight>source of new ideas</Highlight>.
          <br />
          When <Highlight>dealing with such situations</Highlight>,
          <br />I believe that <Highlight>communication is essentail</Highlight>
          . <Highlight>Eommunicating openly</Highlight>,
          <br />
          <Highlight>listening patiently</Highlight>,{" "}
          <Highlight>understanding the each other&apos;s viewpoint</Highlight>,
          <br />
          and then <Highlight>rationally discussing</Highlight> should the{" "}
          <Highlight>best choice of action</Highlight>.
          <br />
          It&apos;s important to{" "}
          <Highlight>
            keep the main goal in mind and respect everyone&apos;s perspectives.
          </Highlight>
        </Answer>
      </section>

      <section id="biggest-challenge">
        <Question id="biggest-challenge">
          これまでに直面した難題について教えてください。また、どのように解決しましたか？
        </Question>
        <Answer>
          The biggest challenges I have been faced should be
          <br />
          choosing the tech stack and design the sturcture of the
          <br />
          online reservation system renewal project.
          <br />
          that was my first time to hold the decision of prototyping a whole
          project.
          <br />
          So I need to be careful. Carefuilly chooose the tech stack, <br />
          and the implement method that will cause least impact to the existing
          system.
        </Answer>
      </section>

      <section id="success-fail">
        <Question id="success-fail">
          現職において、あなたの最大の成果（失敗）は何ですか？
        </Question>
        <Answer>
          成果：
          <br />
          It should be the mini-renewal project that I was responsible for.
          <br />
          It&apos;s my{" "}
          <Highlight>
            first time handling a buisiness project from scretch
          </Highlight>
          .
          <br />I have <Highlight>learnt alot throught the process</Highlight>.
          <br />
          And I was{" "}
          <Highlight>
            grateful that I was supported by good collegues and managers
          </Highlight>
          <br />
          They provided me <Highlight>chance to grow</Highlight>.
          <br />
          And I was{" "}
          <Highlight>
            able to do someing real that really contributed to the team
          </Highlight>
          by <Highlight>addressing the old technical debt.</Highlight>
          <br />
          失敗：
          <br />
          Fortunately there was no significant failure have been encountered so
          far.
          <br />
          But I&apos;ve <Highlight>faced challenges along the way</Highlight>,
          like misunderstood some project requirements.
          <br />
          For instance, in my first company, in frontend aspect
          <br />
          I was responsible to following the design of UX designer and implement
          it correctly.
          <br />
          Most design were straignt forward, but sometimes
          <br />
          there were special UX requirements that were not shown in figma.
          <br />
          following the image in figma, at first I thought I had finished the
          task.
          <br />
          but after I showed her my work, she reminded me that I had missed some
          of UX behaviour. Then I took some time to fix it.
          <br />
          Hopefully I demostrated to her first before I show it my boss,
          <br />
          Quite a simple event, but this{" "}
          <Highlight>taught me a valuable lesson</Highlight> about importance of{" "}
          <Highlight>communication among the team</Highlight>.
          <br />
          Since then I always ask more to clarify the requiremnt before I start
          my work.
        </Answer>
      </section>
      <section id="question">
        <Question id="question">何か聞きたいこと？</Question>
        <Answer>
          1. company&apos;s journey and how it started. Spin-off from progress
          technology in 2020, is there any story behind it?
          <br />
          2. what kind of exicting on going projects are running now? that
          hopefully I am able to participate in?
          <br />
          3. About SHIKAI, it was released in 2016, which is 7 years ago. In
          this new AI era, mainly about LLM, is there any plan upgrade the
          SHIKAI?
          <br />
        </Answer>
      </section>
      <section id="salary">
        <Question id="salary">希望年収</Question>
        <Answer>
          Hannah, my agent in charge of Boy and more will be discussing about
          it.
        </Answer>
      </section>
      <section id="time-available">
        <Question id="time-available">入社可能時期を教えてください</Question>
        <Answer>immediate</Answer>
      </section>
      <section id="other-interview">
        <Question id="other-interview">他社の選考状況を教えてください</Question>
        <Answer>
          receive one offer from a company
          <br />
          others are still in progress
          <br />
        </Answer>
      </section>
    </main>
  );
}

export default function Page({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  return locale === "en" ? <ENQNA /> : <JPQNA />;
}
