"use strict";
const { Token } = require("../models");

class keyTonkenService {
  static createToken = async ({
    userId,
    publicKey,
    privateKey,
    refreshToken,
  }) => {
    try {
      const checksTokens = await Token.findOne({ where: { userId: userId } });
      if (checksTokens) {
        const refreshTokensUser = checksTokens.refreshTokensUser || [];
        refreshTokensUser.push(refreshToken);

        await Token.update(
          { publicKey, 
            privateKey, 
            refreshToken, 
            refreshTokensUser: JSON.stringify([refreshToken]) },
          { where: { userId: userId } }
        );
        return checksTokens.publicKey;
      }
      const tokens = await Token.create({ userId, publicKey, privateKey });
      return tokens ? tokens.publicKey : null;
    } catch (error) {
      return error;
    }
  };
}
module.exports = keyTonkenService;
