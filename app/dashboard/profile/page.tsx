import ProfileImage from './components/ProfileImage';
import BasicInfo from './components/BasicInfo';
import Career from './components/Career';
import Hobbies from './components/Hobbies';
import Links from './components/Links';

export default function Profile() {
    return (
      <main className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">自己紹介</h1>
        
        {/* プロフィール画像 */}
        <ProfileImage imageUrl="/profile/buntaro.jpg" alt="No Image" />
        
        {/* 基本情報 */}
        <BasicInfo
          name="保坂 啓介"
          affiliation="第2開発G"
          hometown="埼玉県所沢市"
        />
  
        {/* 経歴 */}
        <Career
          career={[
            "大学時代：情報系の学科で画像分析の研究",
            "新卒でSIer企業に入社 Microsoft365を扱うSE",
            "開発に携わりたくて転職　社内開発→CF開発へ！",
          ]}
        />
  
        {/* 趣味 */}
        <Hobbies
          hobbies={[
            "漫画：ジャンプ系",
            "ゲーム：シャドバ、ピクミン",
            "サウナ：週３でととのい",
          ]} 
        />

        {/* リンク */}
          <Links
            links={[
            { label: "自己紹介ページ", url: "https://sites.google.com/wwwave.jp/self-introduction/%E4%BF%9D%E5%9D%82-%E5%95%93%E4%BB%8B?authuser=0" },
          ]}
        />
      </main>
    );
  }