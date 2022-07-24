import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import styles from "../styles/Application/ServerSidebar.module.scss";
let max = 10;
function User() {
  return (
    <div class={styles.user}>
      <div class={styles.user_container}>
        <div class={styles.avatar}>
          <img
            src="https://cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png?size=1024"
            alt=""
          />
        </div>
        <div class={styles.name}>
          <div class={styles.username}>Mr.Kasper</div>
          <div class={styles.status}>Hello world!</div>
        </div>
      </div>
    </div>
  );
}

export function ServerSidebar() {
  const [voice, setVoice] = useState(true);
  const [voiceUsers, setVoiceUsers] = useState(Array(max+10).fill(0));
  return (
    <div class={styles.container}>
      <div class={styles.up_container}></div>
      <div class={styles.down_container}>
        {voice ? (
          <div class={styles.voice}>
            <div class={styles.channel}>
              <div class={styles.container}>
                <div class={styles.details}></div>
                <div class={styles.members}>
                  {voiceUsers.slice(0, max).map((user, i) => (
                    <img
                      style={{ position: "relative", left: `${-8 * i}px` }}
                      src="https://images-ext-2.discordapp.net/external/IHYqSv1JWvKfRoo6etajisbHqZXS2ortFa70RqNZT04/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png"
                      alt=""
                    />
                  ))}
                  {voiceUsers.slice(0, max).length < voiceUsers.length ? (
                    <div
                      style={{
                        position: "relative",
                        left: `${-8 * voiceUsers.slice(0, max).length}px`,
                      }}
                    >+{voiceUsers.length - voiceUsers.slice(0, max).length}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div class={styles.status}>VOICE CONNECTED</div>
          </div>
        ) : (
          ""
        )}
        <User />
      </div>
    </div>
  );
}
