"use strict";

const AccessService = require("../services/access.service");
const VerifyEmail = require("../utils/email.utils");

class AccessController {
  signUp = async (req, res, next) => {
    try {
      const newUserEl = await AccessService.signUp(req.body);

      if (newUserEl && newUserEl.email) {
        const verificationLink = `http://localhost:3520/verify/${newUserEl._id}`;
        const emailContent = `
                <table
                  width="100%"
                  height="100%"
                  style="min-width: 348px"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  lang="en">
                  <tbody>
                    <tr height="32" style="height: 32px">
                      <td></td>
                    </tr>
                    <tr align="center">
                      <td>
                        <div><div></div></div>
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          style="padding-bottom: 20px; max-width: 516px; min-width: 220px"
                        >
                          <tbody>
                            <tr>
                              <td width="8" style="width: 8px"></td>
                              <td>
                                <div
                                  style="
                                    border-style: solid;
                                    border-width: thin;
                                    border-color: #dadce0;
                                    border-radius: 8px;
                                    padding: 40px 20px;
                                  "
                                  align="center"
                                  class="m_6566539640064596193mdv2rw"
                                >
                                  <img
                                    src="https://i.pinimg.com/originals/4f/6b/bf/4f6bbf3effc5cf63645b64c8681ae3e6.png"
                                    width="74"
                                    height="74"
                                    aria-hidden="true"
                                    style="margin-bottom: 16px"
                                    alt="Google"
                                    class="CToWUd"
                                    data-bit="iit"
                                  />
                                  <div
                                    style="
                                      font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica,
                                        Arial, sans-serif;
                                      border-bottom: thin solid #dadce0;
                                      color: rgba(0, 0, 0, 0.87);
                                      line-height: 32px;
                                      padding-bottom: 24px;
                                      text-align: center;
                                      word-break: break-word;">
                                    <div style="font-size: 24px">
                                        Verify your email address
                                    </div>
                                  </div>
                                  <div
                                    style="
                                      font-family: Roboto-Regular, Helvetica, Arial, sans-serif;
                                      font-size: 14px;
                                      color: rgba(0, 0, 0, 0.87);
                                      line-height: 20px;
                                      padding-top: 20px;
                                      text-align: left;">
                                  <h3> Dear ${newUserEl.fullname} </h3>
                                    Welcome to Unlock English! We're thrilled to have you embark on this journey to enhance your English language skills. To ensure your
                                    account security and complete the registration process, we kindly request you to verify your email address.
                                    <br /><br />You need to click this Verify email button to complete the email confirmation:<br />
                                    <div
                                      style="
                                        text-align: center;
                                        margin-top: 20px;
                                        line-height: 36px;">
                                        <a href="${verificationLink}" style="text-decoration: none; font-size:20px; color: white; background-color: #007bff; padding: 10px 20px; border-radius: 5px;">Verify Email</a>
                                    </div>
                                    <br/>
                                    <p>In case you didn't initiate the creation of an Unlock English account,
                                    you can safely disregard this email. Your email address won't be added to our system,
                                      and you won't receive any further notifications.</p>
                                      <p>We're committed to providing you with the best possible English learning experience. If you have any questions or concerns, please don't hesitate to contact our support team.
                                      <br/>
                                      Sincerely,
                                      <br/></p>
                                      <h3 tyle="font-weight: bold">The Unlock English Team</h3>
                                  </div>
                                </div>
                                <div style="text-align: left">
                                  <div
                                    style="
                                      font-family: Roboto-Regular, Helvetica, Arial, sans-serif;
                                      color: rgba(0, 0, 0, 0.54);
                                      font-size: 11px;
                                      line-height: 18px;
                                      padding-top: 12px;
                                      text-align: center;">
                                    <div style="direction: ltr">
                                      © 2024 Unlock English
                                      <a
                                        class="m_6566539640064596193afal"
                                        style="
                                          font-family: Roboto-Regular, Helvetica, Arial,
                                            sans-serif;
                                          color: rgba(0, 0, 0, 0.54);
                                          font-size: 11px;
                                          line-height: 18px;
                                          padding-top: 12px;
                                          text-align: center;
                                        "
                                        >ĐÀ NẴNG - VIỆT NAM </a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td width="8" style="width: 8px"></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr height="32" style="height: 32px">
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                `;
        await VerifyEmail.sendMail(
          newUserEl.email,
          "Unlock English Email Verification",
          emailContent
        );
      }
      return res.status(201).json(newUserEl);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = new AccessController();
