const preprocessHtml = (html: any) => {
    // Remove unsupported tags
    html = html?.replace(/<(\/?)(strong|em|span|p|ul)([^>]*)>/g, "");
    // Convert <br> tags to newline characters
    html = html?.replace(/<br\s*\/?>/g, "\n");
    // Convert <a> tags to plain text
    html = html?.replace(/<a[^>]*>(.*?)<\/a>/g, (_, text) => text);
    // Convert <li> tags to newline characters
    html = html?.replace(/<\/?li>/g, "\n");

    return html;
  };

  export default preprocessHtml