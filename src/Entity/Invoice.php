<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\InvoiceRepository")
 * @ApiResource(
 *  subresourceOperations={
 *      "api_customers_invoices_get_subresource"={
 *          "normalization_context"={"groups"={"invoices_subresource"}}
 *      }
 * },
 *  attributes={
 *      "pagination_enabled"=true,
 *      "pagination_items_per_page"=20,
 *      "order": {"amount": "desc"}
 * },
 *  normalizationContext={
 *      "groups"={"invoices_read" }},
 *  denormalizationContext={"disable_type_enforcement"=true}
 * )
 * @ApiFilter(OrderFilter::class)
 */
class Invoice
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     * @Assert\NotBlank(message="La date est obligatoire")
     */
    private $year;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})
     * @Assert\Type(type="numeric", message="Le montant doit être un chiffre ")
     */
    private $amount;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     * @Assert\Type(type="numeric", message="Le montant doit être un chiffre ")
     */
    private $subscription;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $medicalCertificate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     * @Assert\NotBlank(message="Faire un choix ")
     * @Assert\Choice(choices={"TOTAL", "PARTIEL"}, message="Faire un choix")
     */
    private $subscriptionType;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     * @Assert\Type(type="numeric", message="Le montant doit être un chiffre ")
     */
    private $january;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $february;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $march;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $april;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $may;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $july;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $june;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $august;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $september;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $october;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $november;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})})
     */
    private $december;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Customer", inversedBy="invoices")
     * @Groups({"invoices_read"})
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

    public function setAmount($amount): self
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
