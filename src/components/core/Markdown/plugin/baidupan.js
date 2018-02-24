export default (quote) => {
  const _quote = quote.replace(/<[^<>]+>/g, '').trim()
  const bdShareUrl = /^https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+$/i
  const bdShareUrlPwd = /^链接: https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+ 密码: [a-z0-9]{4}$/i
  if (bdShareUrl.test(_quote)) {
    return `<div style="color: red;">${_quote}</div>`
  } else if (bdShareUrlPwd.test(_quote)) {
    const url = _quote.match(/https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+/i)
    const pwd = _quote.match(/[a-z0-9]{4}$/i)
    return `<div style="color: blue;">${url[0]} - ${pwd[0]}</div>`
  } else {
    return false
  }
}