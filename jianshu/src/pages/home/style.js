import styled from 'styled-components'

export const HomeWrapper = styled.div`
    margin: 0 auto;
    overflow: hidden;
    width: 960px;
`

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
`

export const TopicItem = styled.div`
    float: left;
    margin-right: 18px;
    padding: 0 10px;
    height: 37px;
    font-size: 14px;
    line-height: 37px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
`

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
`

export const ListInfo = styled.div`
    float: left;
    width: 100%;
    .title {
        color: #333;
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
    }
    .desc {
        color: #999;
        font-size: 13px;
        line-height: 24px;
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    margin: 10px 0;
    width: 280px;
    height: 50px;
    .recommend-pic {
        width: 100%;
        height: 100%;
    }
`

export const WriterWrapper = styled.div`
    margin-top: 60px;
    width: 280px;
`
export const WriterItem = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 47px;
    .writer-pic {
        display: inline-block;
        width: 47px;
        height: 47px;
        border-radius: 50%;
        vertical-align: top;
    }
    .writer-info {
        display: inline-block;
        margin-left: 10px;
        height: 100%;
        .writer-name {
            margin-right: 60px;
            padding-top: 5px;
            font-size: 14px;
            line-height: 20px;
        }
        .writer-detail {
            margin-top: 2px;
            font-size: 12px;
            line-height: 20px;
            color: #969696;
        }
    }
`