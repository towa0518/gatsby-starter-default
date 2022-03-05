import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: ページが見つかりません</h1>
    <p>
      <Link to="/">ホームへ戻る</Link>
    </p>
  </Layout>
)

export default NotFoundPage
