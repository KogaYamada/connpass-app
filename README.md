## 開発するにあたって
* UI設計はAtomic Designをベースに行っています。<br />
参考：https://ponday.hatenablog.com/entry/2018/12/05/085100


## 注意事項
### 作業を開始するとき
* feature/#<Issue番号>でブランチを作成してください。
* Issueなどと関係ない時はfeature/<作業名>でお願いします。
* Projectの該当Issueのカードを作業中に移動させてください。
* 該当するIssueのアサインに自分を追加してください。
* 常に最新のdevelopからブランチを切って作業してください。(無駄なコンフリクトの原因になります。)

### 作業が終わったとき
* 不要なコード(console.log()など)があればを削除してください。
* developブランチにPRしてください。
* PRがマージされたらIssueもCloseしたいので、PRに,Closes  #<Issue番号>のようにしてください。
ex. Closes  #999999
