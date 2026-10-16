import React from 'react';
import { Mail, Phone, Building2 } from 'lucide-react';
import { TEAM_MEMBERS, APP_CONFIG } from '../data/content';
import styles from './TeamSection.module.css';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="section" aria-labelledby="team-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineering Group</span>
          <h2 id="team-heading" className="section-title">
            Meet Team {APP_CONFIG.teamName}
          </h2>
          <p className="section-description">
            Six members. One mission. Engineering precision in satellite tracking.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.cardTop}>
                <div className={styles.avatar} aria-hidden="true">
                  {member.initials}
                </div>
                <div className={styles.nameBlock}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <span className={styles.roleTag}>{member.role}</span>
                </div>
              </div>

              <div className={styles.cardDetails}>
                <div className={styles.detailRow}>
                  <Mail size={16} className="flex-shrink-0" />
                  <a
                    href={`mailto:${member.email}`}
                    className={styles.detailLink}
                    title={`Send email to ${member.name}`}
                  >
                    {member.email}
                  </a>
                </div>

                <div className={styles.detailRow}>
                  <Phone size={16} className="flex-shrink-0" />
                  <a
                    href={`tel:${member.mobile}`}
                    className={styles.detailLink}
                    title={`Call ${member.name}`}
                  >
                    {member.mobile}
                  </a>
                </div>

                <div className={styles.institutionRow}>
                  <Building2 size={16} className="flex-shrink-0" />
                  <span>{member.institution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
