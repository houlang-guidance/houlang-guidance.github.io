const 新生手册 = withPrefixPath('freshman-manual/', ['introduction']);

const 数字化生活 = withPrefixPath('digital-life/', ['introduction']);


const 贡献指南 = withPrefixPath('contribution/', ['introduction','style-library']);

/** 文档集合 */
module.exports = {
  新生手册,
  数字化生活,
  计算机专业公益课,
  贡献指南,
};

// 下面是硬核代码部分

/**
 * 给路径添加前缀
 * @param {string} prefix
 */
function withPrefixPath(prefix, object) {
  if (Array.isArray(object))
    return object.map((item) =>
      typeof item === 'string' ? prefix + item : withPrefixPath(prefix, item),
    );
  else if (typeof object === 'object')
    return Object.fromEntries(
      Object.entries(object).map(([key, object]) => [
        key,
        withPrefixPath(prefix, object),
      ]),
    );
  else return object;
}
