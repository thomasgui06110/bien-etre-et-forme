<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191012183347 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE invoice (id INT AUTO_INCREMENT NOT NULL, customer_id INT DEFAULT NULL, year VARCHAR(255) NOT NULL, amount DOUBLE PRECISION DEFAULT NULL, subscription DOUBLE PRECISION DEFAULT NULL, medical_certificate TINYINT(1) NOT NULL, subscription_type VARCHAR(255) DEFAULT NULL, january DOUBLE PRECISION DEFAULT NULL, february DOUBLE PRECISION DEFAULT NULL, march DOUBLE PRECISION DEFAULT NULL, april DOUBLE PRECISION DEFAULT NULL, may DOUBLE PRECISION DEFAULT NULL, july DOUBLE PRECISION DEFAULT NULL, june DOUBLE PRECISION DEFAULT NULL, august DOUBLE PRECISION DEFAULT NULL, september DOUBLE PRECISION DEFAULT NULL, october DOUBLE PRECISION DEFAULT NULL, november DOUBLE PRECISION DEFAULT NULL, december DOUBLE PRECISION DEFAULT NULL, INDEX IDX_906517449395C3F3 (customer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_906517449395C3F3 FOREIGN KEY (customer_id) REFERENCES customer (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE invoice');
    }
}
