/**
 * Created by tompl on 3/19/2017.
 */
import Head from 'next/head'

import stylesheet from '../styles/styles.scss'

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js


export default ({ children, title = 'Craftgram' }) => (
    <div>
        <Head>
            <meta charSet='utf-8' />
            <title>{ title }</title>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <nav>
            <img src="/static/images/logo.png"></img>
            <div className="searchWrap">
                <input placeholder="Zoeken" type="text"  />
            </div>
            <div className="navigationWrap"> </div>
        </nav>
        { children }

    </div>
)