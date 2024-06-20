
const EmailContent = (code) => {
  return `
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
              style="padding-bottom: 20px; max-width: 516px; min-width: 220px">
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
                      class="m_6566539640064596193mdv2rw">
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
                        Chào mừng bạn đến với Unlock English! Chúng tôi rất vui mừng được bạn tham gia hành trình nâng cao kỹ năng tiếng Anh của mình.
                        Để đảm bảo tính bảo mật cho tài khoản và hoàn tất quá trình đăng ký, vui lòng xác minh địa chỉ email của bạn.
                        <br /><br /> Mã code xác nhận email :<br />
                        <div
                          style="
                            text-align: center;
                            margin-top: 20px;
                            line-height: 36px;">
                            <p
                              style="
                                font-size: 22px;
                                font-family: Arial, sans-serif;
                                color: #ffffff;
                                text-decoration: none;
                                background-color: #a7a7a7;
                                border-radius: 5px;
                                padding: 10px 24px;
                                display: inline-block;">
                                ${code}
                            </p>
                        </div>
                        <br/>
                          <p> Chúng tôi cam kết cung cấp cho bạn trải nghiệm học tiếng Anh tốt nhất có thể. 
                          Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào, đừng ngại liên hệ với đội ngũ hỗ trợ của chúng tôi.
                          <br/>
                          Sincerely,
                          <br/></p>
                          <h3 style="font-weight: bold">The Unlock English Team</h3>
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
                              text-align: center;"> ĐÀ NẴNG - VIỆT NAM </a>
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
};

module.exports = EmailContent;
