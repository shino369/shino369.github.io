import IndexBar from "@/components/IndexBar";
import { Answer, Highlight, Question } from "@/components/QNA";
import { LocaleParam } from "@/types";
import { getTranslations, setRequestLocale } from "next-intl/server";

function JPQNA() {
  return (
    <main className="flex flex-col items-center py-8 px-4 sm:p-20 md:p-24 font-sans relative text-lg md:text-xl">
      <IndexBar />

      <section id="greetings">
        <Question id="greetings">挨拶</Question>
        <Answer>
          はじめまして、アンソニーウォンと申します。 <br />
          本日は貴重なお時間をいただき、ありがとうございます。 <br />
        </Answer>
      </section>

      <section id="self-intro">
        <Question id="self-intro">自己紹介</Question>
        <Answer>
          改めまして、アンソニー・ウォンと申します。よろしくお願いいたします。
          <br />
          <br />
          私はソフトウェアエンジニアとして3年以上の経験を持ち、主にフロントエンドとモバイルアプリ開発を専門としております。
          <br />
          <br />
          香港出身で、2023年に日本に移住しました。日本の文化に魅力を感じ、ここで技術力を活かして働きたいと思い移住を決意しました。
          <br />
          <br />
          香港城市大学で情報工学を学び、2021年に卒業後、最初はスタートアップ企業で受託開発に携わり、React
          NativeやAngularを用いたフロントエンド開発のスキルを磨きました。
          <br />
          <br />
          その後、ホスピタリティ業界のグローバル企業であるShiji
          Groupに転職し、SaaSプロダクト「Infrasys Cloud
          POS」のテーブル管理システムのフルスタック開発を担当しました。具体的には、ReactやVue.js、CakePHPを活用し、ユーザー体験の向上に注力しました。
          <br />
          <br />
          2023年に日本に移住し、現在はリンクス株式会社というFintechスタートアップで働いています。Next.jsを使用した金融機関向けIDaaSアプリや、Flutterを用いたモバイルアプリの開発をシニアとしてリードし、システム設計やチームの技術力向上に貢献してきました。
          <br />
          <br />
          特にフロントエンドとモバイルの開発経験を活かし、UI/UXの最適化やスケーラブルなコードの実装に力を入れています。
          <br />
          <br />
          MENU様の「MENU」アプリの技術スタックであるReact
          NativeやExpoに強い関心があり、これまでの経験を活かして、ユーザーに愛されるプロダクトづくりに貢献したいと考えております。
          <br />
          <br />
          日本語はJLPT
          N1を取得しておりますが、まだ流暢さには磨きが必要だと感じており、日々努力を続けています。どうぞよろしくお願いいたします。
          <br />
          <br />
          ---
          <br />
          <br />
          Allow me to introduce myself. My name is Anthony Wong. Thank you for
          having me.
          <br />
          <br />
          I am a software engineer with over three years of experience,
          specializing in frontend and mobile application development.
          Originally from Hong Kong, I moved to Japan in 2023. Having always
          been drawn to Japanese culture, I decided to relocate here to leverage
          my technical skills in this environment.
          <br />
          <br />
          After graduating from City University of Hong Kong with a degree in
          Information Engineering in 2021, I began my career at a startup
          focused on contract development, where I honed my skills in frontend
          frameworks like React and Angular. Later, I joined Shiji Group, a
          global company in the hospitality industry, where I worked on the
          full-stack development of the SaaS product “Infrasys Cloud POS,”
          specifically its table management system. Using React, Vue.js, and
          CakePHP, I focused on enhancing the user experience.
          <br />
          <br />
          In 2023, I moved to Japan and now work at LiNKX Inc., a Fintech
          startup. I’ve led the development of an IDaaS app for financial
          institutions using Next.js and a mobile app using Flutter,
          contributing to architecture design and team skill development. My
          experience in React Native and Flutter has allowed me to prioritize
          UI/UX optimization and scalable code implementation.
          <br />
          <br />I am particularly excited about this opportunity to work with
          the “MENU” app, built with React Native and Expo, and I believe my
          background aligns well with this role. I’d love to contribute to
          creating a product that users love. While I hold JLPT N1, I’m still
          working on fluency and continue to practice daily. Thank you for your
          consideration.
        </Answer>
      </section>

      <section id="university">
        <Question id="university">大学について教えてください</Question>
        <Answer>
          大学は香港城市大学情報工学科卒（正確に言うとInformation
          Engineeringなんですが）
          <br />
          、プログラミングはもちろんとして
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
          新卒入社した会社が、受託開発がメイン、プロジェクトが終わったら、
          <br />
          運用保守とか一切なくて、本当に終わりました、という感じで
          <br />
          毎回終わった後すぐに次のプロジェクトへ移行しました。
          <br />
          そこで、自分が実際何かを作った感覚がしっかり来なかったです。
          <br />
          だから、自社サービスがある会社に転職したいと思って、次の会社に転職しました。
          <br />
          そして、次の会社、Shiji
          Groupは主に自社のSaaS開発ですので、同じプロダクトを携わることになります。
          <br />
          自分が作った新しい機能、UIとか、お客様から
          <br />
          ちゃんと使用した感想とか、feedbackが帰ってきます
          <br />
          そのfeedbackをもとづいて、さらに改善し、よりいいサービスを提供することができました。
          <br />
          ちゃんと自分が一つのサービスを、製品を、開発している感じがします。
          <br />
          <br />
          二回目の転職：
          <br />
          自分が離職した理由は、日本にくる機会があったからです。
          <br />
          昔から暮らしてみたかった日本に、新しい環境でチャレンジしたいので、離職しました。
          <br />
          三回目の転職：
          <br />
          そして今の会社のリンクス、正直いい会社だと思います。
          <br />
          働き方はかなり自由で、フレックスタイム、そしてフルリモートが出来ます。
          <br />
          仕事の内容についても、新しい技術に触れる機会が多いです。
          <br />
          ただ評価システムが整ってないのが難点です。今の評価システムは去年から導入されたばかりですが、
          <br />
          Aランクを取ったところで、給料があまり変わらないです。
          <br />
          一回の評価につき、昇給の天井はわずか3%、
          <br />
          そして昇進の保証もないです。
          <br />
          実際今のflutterプロジェクトにはかなり貢献出来ましたので、
          <br />
          Aランクを取りましたが、昇給が1.9%しかなかったです。
          <br />
          キャリアパスがあまり明確ではないのが転職の理由です。
        </Answer>
      </section>
      <section id="reason-to-japan">
        <Question id="reason-to-japan">なぜ日本に来た？</Question>
        <Answer>
          自分は日本に来た多くの外国籍の方と同じ、日本の文化が大好きで、
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
      <section id="siboudouki-menu">
        <Question id="siboudouki-menu">
          何故うちの会社?（志望動機---menu
        </Question>
        <Answer>
          私は普段からフードデリバリーアプリをよく利用しており、特にMENUやUberEatsのヘビーユーザーです。
          <br />
          <br />
          MENUアプリを使っていて、そのシンプルで直感的なUIとスムーズな注文体験にいつも感心しています。
          <br />
          <br />
          しかし、ユーザーとして、例えば画面遷移のラグやUIのズレなど改善の余地があると感じたことがあります。
          <br />
          <br />
          他にももっとユーザーにとって便利な機能やサービスがあればいいなぁ、と思うことがあります。
          <br />
          <br />
          このような課題をエンジニアとして解決し、ユーザーの生活をより便利にしたいという思いが、私の志望動機のきっかけとなりました。
          <br />
          <br />
          私はこれまで、React
          NativeやFlutterを使ったモバイルアプリ開発に携わり、ユーザー体験を向上させるための設計や最適化に注力してきました。例えば、現在の会社ではFlutterを使ったカードアプリの開発をシニアエンジニアとしてリードし、エラーハンドリングを見直すことでアプリの安定性を高め、また直接UIデザイナーと協力して、ユーザーにとって使いやすいUI/UXを提供することに貢献してきました。
          <br />
          <br />
          MENU様の「MENU」アプリはReact
          Nativeを活用しており、私のスキルと経験が活かせる場だと感じています。ユーザーの視点とエンジニアのスキルを組み合わせ、注文から配送までシームレスな体験を提供するプロダクトづくりに貢献したいと考えています。さらに、日本で育まれるフードテック文化の一端を担い、地域の飲食店やユーザーとつながるサービスを一緒に成長させたいという思いもあります。
          <br />
          <br />
          このような理由から、ぜひ御社で働きたいと強く願っております。
        </Answer>
      </section>

      <section id="job-in-shiji">
        <Question id="job-in-shiji">
          前職、どのような責務を負っていますか？
        </Question>
        <Answer>
          前職について
          <br />
          前の会社、Shiji は
          <br />
          ホスピタリティ関連のIT soultionを提供する会社です
          <br />
          自分はエンジニアとして、
          <br />
          自社開発のプロダクト「infrasys Cloud POS」の一部
          <br />
          「テーブルマネジメントシステム」の継続的開発及び保守運用を担当しました
          <br />
          テーブルはデータベースのテーブルではなく、飲食店やホテルのテーブル、つまり席とのことで、それを管理するシステムです。
          <br />
          システムは主にreactとcakephpを使って開発しました。
          <br />
          飲食店の席予約から、お客様のオーダー、メニューの管理とか色んな機能があります。
          <br />
          開発については、取引先の要望に応じて、新しい機能を追加するのがメインでした。
          <br />
          それ以外もバグ修正、セキュリティ強化、技術的負債を解消することでした。
          <br />
          特筆すべきことは、小規模ではありますが、技術的負債を解消するために、
          <br />
          Vue.jsの導入を提案し、開発をリードしたことです。
          <br />
        </Answer>
      </section>

      <section id="job-in-linkx">
        <Question id="job-in-linkx">
          Linkxではどのような責務を負っていますか？
        </Question>
        <Answer>
          自分は二つのプロジェクトに携わった経験があります。
          <br />
          一つ目は、Next.jsを用いた金融機関向けのIDaaS認証アプリ開発です。
          <br />
          基本はFIDO2認証とOIDC CIBAを導入した、
          <br />
          シングルサインオンと振込の承認などの機能を提供する認証を行うアプリです。
          <br />
          自分が担当した部分は、Next.jsの方で行う、ユーザー登録、認証情報の管理、
          <br />
          そしてeKYCとかサードパーティーのAPIやSDKとの連携です。
          <br />
          納期を厳守しつつ、終わった後も適切な保守運用が行えるために、スムーズなハンドオーバーを行いました。
          <br />
          <br />
          二つ目は、現在進行中の、Flutterのカードアプリの開発です。
          <br />
          具体的にはMyJCBやSMBC VPassみたいアプリです
          <br />
          Flutterは初めて使いましたが、
          <br />
          すぐに慣れて、今はもうアプリの開発をリードしています。
          <br />
          このプロジェクトでは、UI/UX向上、コンポーネント設計、アーキテクチャ改善、
          <br />
          コードレビューやメンバーの指導などに注力し、特にエラーハンドリング設計・コード品質向上に貢献しました。
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
          当時の担当は丁度自分です。
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
          開発者ではなくて、ユーザーの視覚で、
          <br />
          どうすれば使いやすいか、どうすれば便利か、
          <br />
          ということを常に考えることが重要だと思います。
          <br />
          <br />
          開発者って理解力がいい人が多いです。
          <br />
          彼らにとって、分かり切ったことは、一目瞭然なことが、
          <br />
          一般人にとって、必ずしも同じように見えるわけじゃないです。
          <br />
          それ以外も、サービスの提供対象、例えば国や地域、年齢層とかで、適切なデザインやサービスを提供することや、
          <br />
          アクセスビリティを考慮することも重要です。
          <br />
          例えば、日本の高齢者の方が多いですので、
          <br />
          フォントサイズや色のコントラストなど、
          <br />
          視覚障害者の方でも使いやすいようにすることが重要で
          <br />
          screen readerの対応とかも必要です。
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
          stateofjsとかの統計分析で、業界のトレンドを研究することです。
          <br />
          もしこの技術を使った場合、
          <br />
          同じくこの技術を使った経験がある人を簡単に雇えるかどうかを考えることです。
          <br />
          <br />
          さらに新卒を雇う場合、フレームワークの習得の難易度も想定すべきです
          <br />
          最後は純粋に
          <br />
          フレームワークのパフォーマンス次第です
        </Answer>
      </section>

      <section id="strength">
        <Question id="strength">強みはなんですか？</Question>
        <Answer>
          自分の強みは
          「フロントエンドアーキテクチャの設計力と、チーム全体の技術向上への貢献」
          です。
          <br />
          <br />
          設計力について、例えばエラーハンドリングの最適化。
          <br />
          今のflutterプロジェクトでは、エラーハンドリングの設計を担当しました。
          <br />
          Resultタイプを導入して、Try-Catchを90%削減し、エラーのスタックトレースを簡潔にしました。
          <br />
          さらにResultタイプのおかげで、早期リターンが可能になり、コードの可読性が向上しました。
          <br />
          また、パフォーマンス最適化、保守性と拡張性を意識した設計が得意です。
          <br />
          <br />
          チーム全体の技術向上への貢献について、
          <br />
          コードレビューやドキュメント整備を通じて、チーム全体のコード品質向上を推進してきて、
          <br />
          そしてデザイナーと協力し、コンポーネントライブラリの最適化や、ユーザー体験向上に取り組んできました。
          <br />
          これらのスキルを活かし、コミューンのデザインシステム構築とフロントエンドの品質向上に貢献できると考えています。
        </Answer>
      </section>

      <section id="weakness">
        <Question id="weakness">欠点は何ですか？</Question>
        <Answer>
          一番の欠点は、語彙力が足りない部分です。
          <br />
          特に日本語のビジネスと技術用語が不足しているので、
          <br />
          会議や資料作成の際に、自分の考えをうまく伝えられないことがあります。
          <br />
          そのため、それらの用語を英語で説明することが多いです。
          <br />
          日本語の勉強を続けていますが、
          <br />
          まだまだ足りない部分があります。
          <br />
          これからも努力して改善するつもりです。
          <br />
        </Answer>
      </section>

      <section id="challenging-task">
        <Question id="challenging-task">
          これまでに直面した難題について教えてください。また、どのように解決しましたか？
        </Question>
        <Answer>
          自分がこれまで経験した中で最も難しかったプロジェクトは、
          <Highlight>
            金融機関向けの IDaaS（Identity-as-a-Service）システム
          </Highlight>
          の開発でした。このプロジェクトは Next.js
          を使用して構築されていました。
          <br />
          自分が参加した当初、フロントエンドエンジニアは2名
          いましたが、1人はバックエンド開発に移り、もう1人は自分の参加後1ヶ月で退職
          しました（引継ぎ期間なし）。結果として、自分は唯一のフロントエンドエンジニアとなり、その後の
          3ヶ月間は1人で開発・バグ修正・パフォーマンス改善
          を担当し、納期を厳守する必要がありました。
          <br />
          このプロジェクトの<Highlight>最も大きな課題</Highlight>
          は、1人で開発のすべてを担いながら、開発・デバッグ・パフォーマンス最適化のバランスを取ること
          でした。また、このプロダクトは 高いセキュリティと安定性
          が求められるものであり、特に 認証・認可に関する複雑なロジック
          が多く存在していました。
          <br />
          そして、プロジェクトの最終月には、顧客側のエンジニア2名が新たに参加
          したため、自分は スムーズな引継ぎとコードレビューの実施
          に注力しました。今回のプロジェクトでは、すでに技術スタックが決まっていたため、大きなアーキテクチャの決定には関わりませんでした。しかし、自分はベストプラクティスに従いながら実装を進め、安定したプロダクトを納期どおりに提供
          することを徹底しました。
          <br />
          この経験を通じて、厳しいスケジュールの中でも独立して開発を進める能力
          や、新しくチームに加わるメンバーと効果的に連携する力
          を大きく強化することができました。
        </Answer>
      </section>

      <section id="pressure-deadline">
        <Question id="pressure-deadline">
          プレッシャーやタイトな納期の中でどのように仕事を進めますか
        </Question>
        <Answer>
          自分は、優先順位を明確にし、計画的に進めることで、プレッシャーやタイトな納期の中でも効率的に仕事を進める
          ようにしています。
          <br />
          <br />
          例えば、金融機関向けのIDaaSプロジェクト
          では、1人でフロントエンド開発を担当することになり、開発・バグ修正・パフォーマンス最適化
          を同時に進める必要がありました。その際、自分は以下のような方法で納期内にプロジェクトを完了させました。
          <br />
          ✅ タスクの優先順位付け:
          影響の大きい機能から実装し、緊急度と重要度のバランスを考えて進めました。
          <br />
          ✅ スプリント管理:
          週単位で進捗を確認し、必要に応じてタスクの調整を行いました。
          <br />
          ✅ 関係者との適切なコミュニケーション:
          状況を早めに共有し、技術的な課題やリスクを適切に伝えることで、問題が大きくなる前に対処しました。
          <br />
          このように、冷静に状況を整理し、適切な対策を講じることで、プレッシャーの中でもパフォーマンスを発揮する
          ことができます。また、タイトな納期のプロジェクトにおいても、品質を犠牲にせずに、スケジュールを守ることを意識して取り組んでいます。
        </Answer>
      </section>

      <section id="question">
        <Question id="question">何か聞きたいこと？</Question>
        <Answer>
          1.今menuの開発において、取り組んでいる課題は何でしょうか？
          <br />
          <br />
          2. 外国籍社員向けの日本語勉強の支援とあるのでしょうか
          <br />
          <br />
          3. チームの雰囲気について知りたいです
          <br />
          <br />
          4. 開発チームの一日のスケジュールが気になります <br />
        </Answer>
      </section>

      <section id="salary">
        <Question id="salary">希望年収</Question>
        <Answer>御社の規定に従います。</Answer>
      </section>
      <section id="time-available">
        <Question id="time-available">入社可能時期を教えてください</Question>
        <Answer>内定後、一ヶ月後からでも可能です。</Answer>
      </section>
      <section id="other-interview">
        <Question id="other-interview">他社の選考状況を教えてください</Question>
        <Answer>
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
          {`detailed one:
          
            Allow me to introduce myself.
            
            I am Anthony Wong, a Trilingual Software Engineer with more than 3 years of experience in frontend development.
            
            I am originally from Hong Kong. I earned a degree in Information Engineering from City University of Hong Kong, with a minor in Japanese Studies.
            

            After I graduated, I began working at Appicidea IT Solutions, which is a growing startup specializing in subcontracting projects.  
            
            There, I gained hands-on experience in full-stack development using Java Spring Boot, Angular, React.js, and React Native.
            

            Later, I had the opportunity to work in Shiji Group, which is a global IT corporation serving the hospitality sector. \n
            I contributed to the full-stack development of their SaaS product known as "Infrasys Cloud POS", and mainly focus on the development of one of the main system called "Table Management System".
            It is a reservation system for restaurant and hotel, developed in React.js, Vue.js, and CakePHP.

            During the period, I also led a small-scale system revamp, integrating vue.js into the existing system, aims to gradually replace jquery in the future, 
            which was a great experience for me in terms of project management and choosing tech stack.


            In September of 2023, I got the opportunity to move to Japan, thanks to the new visa scheme introduced by the Japanese government.

            After I settled down, I joined my current company, Linkx, as a Software Engineer. 
            
            It is a fintech company which focuses on providing digital transformation solutions for financial institutions. I mainly work on frontend and mobile app development, using Next.js and flutter.
            
            I have contributed to 2 projects, one using next.js, and the other using flutter. Especially the flutter project, it is a challenging yet rewarding experience for me. Is a project that completely built from scratch.
            
            Given that I have no piror expenrience in flutter at all, so I learn, I improve, I grow a lot during the project. Just in half of a year, I become the leading flutter developer in the team, which proves my ability to learn and adapt to new technology quickly.
            
            
            I hope I can make a meaningful contribution to the team at Rakuten, learn and gain unique and valuable experiences in the process.
            
            Thank you.

            ================================================

            short one:

            My name is Anthony Wong, and I am a software engineer with over three years of experience, focusing on frontend and mobile development.
            
            I am specializing in React, Next.js, Vue.js (Composition API), and Flutter.


            Currently, I work at LiNKX Inc., where I have contributed to multiple projects, including:

            ✅ A Next.js-based IDaaS authentication platform for financial institutions 
            
            – I handled frontend development alone for three out of five months, ensuring the project stayed on schedule, and conducting a smooth handover to the customer’s engineers.

            ✅ A Flutter-based payment-related application 
            
            – Despite having no prior Flutter experience, I quickly adapted and became a key contributor, 
            implementing an advanced error-handling system that reduced 90% of redundant try-catch blocks, 
            added an error boundary (inspired by React), and integrated Firebase Crashlytics for better debugging.

            
            Beyond technical expertise, I am capable to work in multinational teams, as I am fluent in Japanese, English, and Chinese. 

            I actively collaborate with backend engineers, conduct code reviews, and mentor junior developers to improve overall team efficiency.
            I am excited about this opportunity at Rakuten because of its mission 
            to empower businesses through innovation and its commitment to large-scale e-commerce solutions. 

            With my experience in scalable frontend architectures, performance optimization, and cross-functional teamwork, 
            I believe I can contribute to Rakuten’s EC Solution Development Department and help build high-quality, user-focused products
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")}
        </Answer>
      </section>
      <section id="university">
        <Question id="university">University</Question>
        <Answer>
          {`About the degree, Information Engineering,\n
            It contains subjects of computer science,\n
            like programming, data structure, database, os, plus some networking and signal related subject\n
            and there are some modern technology course like teaching aws and web programming framework (java springboot, vue.js)
          `
            .split("\n")
            .map((t) => t.trim())
            .join("\n")}
        </Answer>
      </section>

      <section id="reason-of-resign">
        <Question id="reason-of-resign">Reason of Resignation</Question>
        <Answer>
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
          April of 2023.
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
          <br />
          <br />
          After I settled down, I joined Linkx, which is my current company.
          <br />
          So far it is a <Highlight>good company with good culture</Highlight>,
          but just like many other startup, it doesn&apos;t have a
          well-organized or well-designed salary review system.
          <br />
          which means it is hard to get a raise, even if you have done a good
          job.
          <br />
          <br />
          For instance, I have been working on a flutter project for half a
          year, <Highlight>leading the team</Highlight> , and so far the project
          is going well.
          <br />I got a <Highlight>A rank</Highlight> in the performance review,
          which is the <Highlight>highest possible rank</Highlight> that an
          engineer can get.
          <br />
          <br />
          But what I got is just 1.9% of salary raise.
          <br />
          Given that <Highlight>my objective right now</Highlight> is to become
          a permanent resident in Japan
          <br />I need not only a stable income to support my life here, but
          also need to <Highlight>fulfill the requirement</Highlight> of the
          visa that
          <br />
          I am planning to apply in the future. (Highly skilled professional
          visa)
          <br />
          So I think it is time for me to move on.
          <br />
          This is the main reason why I am looking for a new job.
        </Answer>
      </section>
      <section id="reason-to-japan">
        <Question id="reason-to-japan">Why come to Japan?</Question>
        <Answer>
          {`just like many other foreigner, I love japanese culure like food, anime and comic\n
            and is planning to settle my life in Japan in the future.
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
      <section id="why-hire">
        <Question id="why-hire">Why should we hire you?</Question>
        <Answer>
          In current work, I have demonstrated the ability to{" "}
          <Highlight>learn quickly</Highlight>,{" "}
          <Highlight>take ownership</Highlight>, and{" "}
          <Highlight>deliver high-quality frontend solutions</Highlight> in
          complex projects.
          <br />
          At LiNKX, I was assigned to an IDaaS project using Next.js, where I
          initially worked with another 2 frontend engineers.
          <br />
          However, one month after I joined, one of them was reassigned to
          backend team, and <Highlight>one was resigned</Highlight>.
          <br />I had to handle the{" "}
          <Highlight>entire frontend development alone</Highlight> for three
          months.
          <br />I{" "}
          <Highlight>successfully delivered the product on time</Highlight>{" "}
          while maintaining code quality, and later, I facilitated a{" "}
          <Highlight>smooth handover</Highlight> when two new engineers from the
          customer side joined. This experience strengthened my ability to work
          independently under{" "}
          <Highlight>
            tight deadlines in an extremely stressful environment
          </Highlight>
          .
          <br />
          <br />
          Additionally, despite having{" "}
          <Highlight>no prior Flutter experience</Highlight>, I{" "}
          <Highlight>quickly adapted and became a key contributor</Highlight> to
          my current mobile project. I designed a{" "}
          <Highlight>
            scalable error-handling system, reducing 90% of unnecessary
            try-catch blocks
          </Highlight>
          , and implemented an <Highlight>error boundary system</Highlight>,
          similar to React’s, improving app stability.
          <br />I also helped integrating{" "}
          <Highlight>
            Firebase Crashlytics along with logging system
          </Highlight>{" "}
          for better debugging.
          <br />
          And not limited to the Flutter parts, I am currently{" "}
          <Highlight>
            working on the native-side, using kotlin to integrate Visa
            push-provisioning service
          </Highlight>
          .
          <br />
          <br />
          Beyond technical skills, I work well in global teams,{" "}
          <Highlight>
            communicate effectively in Japanese, English, and Chinese
          </Highlight>
          , and have experience collaborating in cross-functional Agile
          environments.
          <br />I believe that my technical expertise, adaptability,
          problem-solving ability, and commitment to continuous improvement make
          me a strong candidate for this role at Rakuten.
        </Answer>
      </section>
      <section id="siboudouki-rakuten">
        <Question id="siboudouki-rakuten">
          why our company? (志望動機---Rakuten)
        </Question>
        <Answer>
          Rakuten is one of the most{" "}
          <Highlight>innovative e-commerce platforms</Highlight> in Japan, with
          a strong <Highlight>global presence</Highlight> and a focus on
          expanding <Highlight>digital services.</Highlight>
          <br />
          <br />I am drawn to Rakuten because of its{" "}
          <Highlight>commitment to innovation</Highlight>,{" "}
          <Highlight>diversity</Highlight>, and the{" "}
          <Highlight>empowerment of society</Highlight>, as encapsulated in the{" "}
          <Highlight>
            core philosophy known as &quot;Rakuten Shugi&quot;
          </Highlight>
          . This philosophy emphasizes principles such as
          &quot;Empowerment,&quot; &quot;Innovation,&quot; and
          &quot;Professionalism,&quot; which{" "}
          <Highlight>
            resonate deeply with my personal and professional values
          </Highlight>
          .
          <br />
          <br />
          The EC Solution Development Department&apos;s{" "}
          <Highlight>
            mission to enhance marketplace diversity
          </Highlight> and{" "}
          <Highlight>develop essential tools for merchants</Highlight> aligns
          with my passion for{" "}
          <Highlight>creating impactful, user-centric solutions</Highlight>.
          <br />
          <br />I am particularly excited about the opportunity to develop{" "}
          <Highlight>a new e-commerce service from scratch</Highlight>, as it
          allows me to apply my skills to services that have a{" "}
          <Highlight>significant impact to the society</Highlight>.
          <br />
          <br />
          Moreover, Rakuten&apos;s emphasis on a{" "}
          <Highlight>collaborative and diverse work environment</Highlight>,
          where professionals from various backgrounds{" "}
          <Highlight>unite towards common goals</Highlight>, is an atmosphere in
          which I desire.
          <br />
          <br />I am eager to bring my experience and enthusiasm to Rakuten,
          contributing to its mission of empowering people and society through
          innovation.
          <br />
          <br />
          Especially given that the team{" "}
          <Highlight>requires to work with the team in China</Highlight>, I
          believe my language skill will be beneficial. I’m looking forward to
          the challenge and growth opportunities Rakuten offers.
        </Answer>
      </section>
      <section id="exp">
        <Question id="exp">
          Do you have any experience in EC site development?
        </Question>
        <Answer></Answer>
      </section>

      <section id="job-in-shiji">
        <Question id="job-in-shiji">
          What were your responsibilities in Shiji Group?
        </Question>
        <Answer>
          In my role at Shiji Group,
          <br />I was primarily responsible for
          <Highlight>enhancing our existing application</Highlight>
          <br />
          by <Highlight>adding new features</Highlight> as per
          <Highlight>client requirements</Highlight>.
          <br />
          In addition to the development of new features,
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

      <section id="job-in-linkx">
        <Question id="job-in-linkx">
          What were your responsibilities in your previous job?
        </Question>
        <Answer>
          I have contributed to 2 projects at Linkx, one using Next.js, and the
          other using Flutter.
          <br />
          In the Next.js project, I was responsible for the frontend development
          for a IDaaS Product.
          <br />
          It is basically an{" "}
          <Highlight>
            OIDC CIBA (like Single Sign On) + Passkey manager
          </Highlight>{" "}
          with advanced feature like, authorizing payment or transcation for
          financial institution.
          <br />
          What I mainly responsible for was the next.js part, which{" "}
          <Highlight>
            performs account creation, user auth flow, and integrate with some
            third party service like eKYC
          </Highlight>
          .
          <br />
          <br />
          I ensured that the project stayed on schedule, and conducted a smooth
          handover to the customer’s engineers.
          <br />
          In the Flutter project, I was assigned to a payment-related
          application, where I quickly adapted and became a key contributor,
          <br />
          implementing an advanced error-handling system that reduced 90% of
          redundant try-catch blocks, added an error boundary (inspired by
          React), and integrated Firebase Crashlytics for better debugging.
          <br />
        </Answer>
      </section>

      <section id="challenging-task">
        <Question id="challenging-task">
          What was the most challenging task you faced in your previous job?
        </Question>
        <Answer>
          One of the most challenging projects I worked on was an IDaaS project
          for financial institutions, built with Next.js.
          <br />
          <br />
          When I joined,{" "}
          <Highlight>there was another 2 frontend engineers</Highlight> who had
          already been on the project for more than one year. However, one of
          them changed to the backend side, and the another one{" "}
          <Highlight>
            resigned one month after I joined, without notice period
          </Highlight>
          , leaving me as the only frontend engineer. For the next three months,
          I was fully responsible for delivering new features and maintaining
          the frontend, ensuring we stayed on schedule.
          <br />
          <br />
          The challenge was balancing feature development, debugging, and
          performance optimization while handling the workload alone. And{" "}
          <Highlight>
            most importantly it was a product which requires high security and
            stability, there were quite a lot of complex logic about the
            authorization and authentication
          </Highlight>
          . Later, in my final month on the project, two engineers from the
          customer side joined, and I focused on a smooth handover and
          conducting code reviews.
          <br />
          <br />
          Although I didn’t make major architectural decisions (as the tech
          stack was predefined), I ensured that my implementations followed best
          practices and delivered a stable product on time. This experience
          strengthened my ability to work independently under tight deadlines
          and effectively collaborate with new team members
        </Answer>
      </section>

      <section id="learn-new-tech">
        <Question id="learn-new-tech">
          Tell me about a time you had to learn a new technology quickly
        </Question>
        <Answer>
          When I joined my current company, I was assigned to a Flutter-based
          mobile project despite having no prior experience with Flutter.
          <br />
          To get up to speed:
          <br />
          ✅ I studied Flutter documentation and took an intensive self-learning
          approach.
          <br />
          ✅ I built small practice apps to familiarize myself with state
          management and UI development.
          <br />
          ✅ I collaborated with experienced team members to understand project
          architecture.
          <br />
          <br />
          Gradually, I started leading frontend development and contributed to
          core system design improvements, such as:
          <br />
          Implementing an error-handling system that reduced 90% of unnecessary
          try-catch blocks using a result type approach (isFailure, isSuccess).
          <br />
          Introducing an error boundary, similar to React, to catch unexpected
          failures at the UI level.
          <br />
          Integrating Firebase Crashlytics to enhance error tracking and
          debugging.
          <br />
          <br />
          Additionally, the project follows MVVM Clean Architecture, ensuring
          modular and maintainable code. Interestingly, we use Flutter Hooks,
          allowing me to apply my React knowledge to Flutter development.
          <br />
          <br />
          Currently, I am working on native-side integration for Visa
          push-provisioning services. This experience has proven my ability to
          quickly learn new technologies and take on leadership responsibilities
          in development.
        </Answer>
      </section>

      <section id="lead-project">
        <Question id="lead-project">
          Can you tell me about a project that you have led?
        </Question>
        <Answer>
          Sure,
          <br />
          One of the most fulfilling projects I got to lead was a{" "}
          <Highlight>
            mini-revamp project when I worked at Shiji Group
          </Highlight>
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
          <br />I <Highlight>recommended to my supervisor</Highlight> that
          consider updating it
          <br />
          by <Highlight>adding a new framework</Highlight> to improve the{" "}
          <Highlight>maintainability</Highlight>
          <br />
          and <Highlight>enable future growth</Highlight>.
          <br />
          Suprisingly I was provided the <Highlight>opportunity</Highlight>
          <br />
          to <Highlight>lead the mini-revamp project</Highlight>.
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
          <br /> <br />
          <Highlight>
            I am grateful to have had the opportunity to lead this small project
            and learn from it.
          </Highlight>
          <br />
          <br />
          In my Flutter project, I initially had no experience with Flutter, but
          as I learned the framework, I gradually took the lead in frontend
          development.
          <br />
          ✅ Challenges & Leadership Contributions:
          <br />
          <br />
          I designed a new error-handling system, reducing 90% of unnecessary
          try-catch blocks by implementing a result-type pattern (isFailure,
          isSuccess).
          <br /> <br />
          I introduced an error boundary (similar to React’s) to improve app
          stability and prevent crashes from propagating.
          <br /> <br />
          I integrated Firebase Crashlytics, which enhanced debugging efficiency
          by providing real-time error logs.
          <br /> <br />
          I actively participated in architectural discussions and ensured that
          the project followed MVVM Clean Architecture for better scalability
          and maintainability.
          <br /> <br />
          I conducted code reviews and mentoring for junior engineers, improving
          the team’s overall code quality.
          <br /> <br />
          ✅ Outcome:
          <br /> <br />
          The system became easier to maintain and significantly reduced
          debugging time.
          <br /> <br />
          The project followed best practices in error handling, leading to a
          more stable application.
          <br /> <br />
          My leadership contributed to a smoother development workflow and
          knowledge sharing within the team.
          <br /> <br />
          This project proved my ability to learn quickly, take ownership, and
          drive improvements, even in an unfamiliar tech stack.
        </Answer>
      </section>

      <section id="strength">
        <Question id="strength">what is your strength?</Question>
        <Answer>
          One of my biggest strengths is my ability to quickly learn and adapt
          to new technologies while maintaining high-quality code.
          <br />
          <br />
          ✅ Examples of My Strengths:
          <br />
          <br />
          When I joined my Flutter project, I had no prior Flutter experience,
          yet I quickly adapted and led key architectural improvements within a
          few months.
          <br />
          <br />
          In my IDaaS Next.js project, I had to work alone on the frontend for
          three months, ensuring the project stayed on schedule while
          maintaining clean and efficient code.
          <br />
          <br />
          I also have strong debugging and problem-solving skills, as seen in my
          error-handling refactor, which significantly reduced redundant code
          and improved maintainability.
          <br />
          <br />
          Additionally, I communicate well in English, Japanese, and Chinese,
          allowing me to collaborate effectively in multinational teams.
          <br />
          <br />
          These strengths allow me to quickly contribute to any project, adapt
          to challenges, and drive technical improvements.
        </Answer>
      </section>

      <section id="weakness">
        <Question id="weakness">what is your weakness?</Question>
        <Answer>
          One of my weaknesses is that I sometimes over-engineer frontend
          solutions, spending too much time optimizing code rather than focusing
          on delivering functional features quickly.
          <br />
          <br />
          ✅ Example:
          <br />
          <br />
          - In my IDaaS Next.js project, I initially spent too much time
          refactoring API calls with TanStack Query, and improving modularity.
          <br />
          - While these optimizations were beneficial, I later realized that
          business requirements should take priority, and I should focus more on
          MVP (Minimum Viable Product) development.
          <br />
          <br />
          ✅ How I’m Improving:
          <br />
          <br />
          - I now balance clean architecture with delivery speed by following
          Agile principles.
          <br />
          - I prioritize tasks based on user impact and communicate with
          stakeholders to ensure I am focusing on business-critical features
          first.
          <br />
          - Instead of immediately refactoring everything, I schedule
          improvements as incremental tasks after the core features are
          delivered.
          <br />- This awareness has helped me become a more pragmatic frontend
          engineer, ensuring that I optimize where it truly matters.
        </Answer>
      </section>

      <section id="pressure-deadline">
        <Question id="pressure-deadline">
          How do you work under pressure or tight deadlines
        </Question>
        <Answer>
          I understand that{" "}
          <Highlight>chasing deadlines are a part of the job</Highlight>,
          especially{" "}
          <Highlight>in an innovative and fast-paced industry</Highlight> like
          E-commerce.
          <br />
          <br />
          When facing tight deadlines, I follow a structured approach:
          <br />
          1️⃣ Prioritize Tasks – I break down requirements into smaller pieces
          and identify critical ones first, aims to &quot;get the most important
          things done&quot;.
          <br />
          <br />
          For example, when developing the IDaaS project, most of the time, I
          was the only frontend developer.
          <br />I had to <Highlight>
            prioritized critical features
          </Highlight>{" "}
          first,
          <br />
          ensuring that the core functionality was implemented and tested.
          <br />
          It sacrificed some critiria like code quality, but it was necessary to
          meet the deadline.
          <br />
          And after code was delivered on schedule, I usually will create
          another follow-up task to refactor the code to improve quality.
          <br />
          <br />
          2️⃣ Efficient Communication –{" "}
          <Highlight>having clear communication with teamates</Highlight>,
          <br />
          and <Highlight>do not hesitate to ask for help</Highlight> from them.
          <br />
          <Highlight>
            helping each other can absolutely produce a better result, in most
            cases.
          </Highlight>
        </Answer>
      </section>

      <section id="keepup-changes">
        <Question id="keepup-changes">
          How do you keep up with changes and advancements in technology
        </Question>
        <Answer>
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
          <Highlight>Healthy disagreement</Highlight> is a{" "}
          <Highlight>part of teamwork</Highlight>
          <br />
          and is often a <Highlight>source of new ideas</Highlight>.
          <br />
          When <Highlight>dealing with such situations</Highlight>,
          <br />I believe that <Highlight>communication is essential</Highlight>
          . <Highlight>Communicating openly</Highlight>,
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
          <br />
          In case if I need to persuade someone, I will try to create a poc or a
          prototype to demonstrate my idea.
          <br />
          Explain the idea in a simple way, and show them the benefit of it.
          <br />
          While working on the latest Flutter project, there was an initial
          debate about how to handle error management.
          <br />
          The existing implementation relied heavily on try-catch blocks, making
          the codebase difficult to maintain.
          <br />
          <br />
          Some engineers were comfortable with the try-catch approach,
          <br />
          while I suggested using a result type system (isFailure, isSuccess) to
          simplify error handling and improve readability.
          <br />
          ✅ I demonstrated a proof-of-concept showing how the result type
          system reduced 90% of unnecessary try-catch blocks.
          <br />
          ✅ I walked the team through the benefits, including cleaner code and
          better debugging with Firebase Crashlytics.
          <br />
          ✅ After discussion and team feedback, we adopted the new approach,
          improving code maintainability and reducing error-handling complexity.
          <br />
          This experience taught me that clear demonstrations and collaboration
          are key to introducing technical improvements successfully
        </Answer>
      </section>

      <section id="handle-negative-feedback">
        <Question id="handle-negative-feedback">
          How do you handle negative feedback?
        </Question>
        <Answer>
          I see negative feedback as an opportunity to learn and grow.
          <br />
          <br />
          ✅ Example:
          <br />
          <br />
          In my Flutter project, I initially wrote overly complex code for error
          handling.
          <br />
          During a peer review, my colleague suggested simplifying the logic and
          making it easier for others to understand.
          <br />
          Instead of taking it personally, I reviewed my approach, refactored
          the code, and improved documentation.
          <br />
          <br />
          ✅ How I Approach Feedback Now:
          <br />
          <br />
          I always ask clarifying questions to fully understand the feedback.
          <br />
          I view it as a chance to improve my skills and coding efficiency.
          <br />
          I regularly request feedback proactively to continuously refine my
          work.
          <br />
          This approach has helped me become a better engineer and a stronger
          team player.
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
      <section id="5-years">
        <Question id="5-years">Where do you see yourself in 5 years?</Question>
        <Answer>
          In five years, I see myself growing as a technical lead or senior
          frontend engineer, leading complex projects and mentoring junior
          developers.
          <br /> <br />
          ✅ I aim to deepen my expertise in frontend performance optimization
          and system architecture.
          <br />
          ✅ I want to contribute to open-source projects and participate in
          frontend engineering conferences.
          <br />
          ✅ Ideally, I would like to grow within Rakuten, helping to build and
          scale innovative e-commerce solutions.
          <br />
        </Answer>
      </section>
      <section id="question">
        <Question id="question">Any questions?</Question>
        <Answer>
          1️⃣ Can you tell me more about the roadmap for this new e-commerce
          service?
          <br />
          2️⃣ What are some challenges the EC Solution Development team is
          currently facing?
          <br />
          3️⃣ How does Rakuten support engineers in professional development?
          <br />
          4️⃣ What is the team structure and development workflow like?
          <br />
        </Answer>
      </section>
      <section id="salary">
        <Question id="salary">expected salary</Question>
        <Answer>7 million yen</Answer>
      </section>
      <section id="time-available">
        <Question id="time-available">when can you join</Question>
        <Answer>1 month after resign</Answer>
      </section>
      <section id="other-interview">
        <Question id="other-interview">他社の選考状況を教えてください</Question>
        <Answer>
          As I started job hunting this month, others are still in progress.
          <br />
        </Answer>
      </section>
    </main>
  );
}

export async function generateMetadata(props: {
  params: Promise<LocaleParam>;
}) {
  const params = await props.params;

  const { locale } = params;

  // console.log(locale);

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  // console.log(t("works"));
  return {
    title: t("works"),
    description: t("works"),
  };
}

export default async function Page(props: { params: Promise<LocaleParam> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return locale === "en" ? <ENQNA /> : <JPQNA />;
}

export const dynamic = "force-static";
