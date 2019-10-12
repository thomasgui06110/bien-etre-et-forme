<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\InvoiceRepository")
 */
class Invoice
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $year;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $amount;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $subscription;

    /**
     * @ORM\Column(type="boolean")
     */
    private $medicalCertificate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $subscriptionType;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $january;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $february;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $march;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $april;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $may;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $july;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $june;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $august;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $september;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $october;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $november;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $december;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Customer", inversedBy="invoices")
     */
    private $customer;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getYear(): ?string
    {
        return $this->year;
    }

    public function setYear(string $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(?float $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getSubscription(): ?float
    {
        return $this->subscription;
    }

    public function setSubscription(?float $subscription): self
    {
        $this->subscription = $subscription;

        return $this;
    }

    public function getMedicalCertificate(): ?bool
    {
        return $this->medicalCertificate;
    }

    public function setMedicalCertificate(bool $medicalCertificate): self
    {
        $this->medicalCertificate = $medicalCertificate;

        return $this;
    }

    public function getSubscriptionType(): ?string
    {
        return $this->subscriptionType;
    }

    public function setSubscriptionType(?string $subscriptionType): self
    {
        $this->subscriptionType = $subscriptionType;

        return $this;
    }

    public function getJanuary(): ?float
    {
        return $this->january;
    }

    public function setJanuary(?float $january): self
    {
        $this->january = $january;

        return $this;
    }

    public function getFebruary(): ?float
    {
        return $this->february;
    }

    public function setFebruary(?float $february): self
    {
        $this->february = $february;

        return $this;
    }

    public function getMarch(): ?float
    {
        return $this->march;
    }

    public function setMarch(?float $march): self
    {
        $this->march = $march;

        return $this;
    }

    public function getApril(): ?float
    {
        return $this->april;
    }

    public function setApril(?float $april): self
    {
        $this->april = $april;

        return $this;
    }

    public function getMay(): ?float
    {
        return $this->may;
    }

    public function setMay(?float $may): self
    {
        $this->may = $may;

        return $this;
    }

    public function getJuly(): ?float
    {
        return $this->july;
    }

    public function setJuly(?float $july): self
    {
        $this->july = $july;

        return $this;
    }

    public function getJune(): ?float
    {
        return $this->june;
    }

    public function setJune(?float $june): self
    {
        $this->june = $june;

        return $this;
    }

    public function getAugust(): ?float
    {
        return $this->august;
    }

    public function setAugust(?float $august): self
    {
        $this->august = $august;

        return $this;
    }

    public function getSeptember(): ?float
    {
        return $this->september;
    }

    public function setSeptember(?float $september): self
    {
        $this->september = $september;

        return $this;
    }

    public function getOctober(): ?float
    {
        return $this->october;
    }

    public function setOctober(?float $october): self
    {
        $this->october = $october;

        return $this;
    }

    public function getNovember(): ?float
    {
        return $this->november;
    }

    public function setNovember(?float $november): self
    {
        $this->november = $november;

        return $this;
    }

    public function getDecember(): ?float
    {
        return $this->december;
    }

    public function setDecember(?float $december): self
    {
        $this->december = $december;

        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(?Customer $customer): self
    {
        $this->customer = $customer;

        return $this;
    }
}
