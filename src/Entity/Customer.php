<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CustomerRepository")
 * @ApiResource(
 *  subresourceOperations={
 *      "invoices_get_subresource"={"path"="/customers/{id}/invoices"}
 * },
 * 
 *  collectionOperations={
 *      "get_customers"={
 *          "method"="GET",
 *          "access_control"="is_granted('ROLE_USER')",
 *          "access_control_message"="Vous n'avez pas le droit !"
 * }
 * },
 *  normalizationContext={
 *      "groups"={"customers_read"}
 * },
 *  attributes={
 *      "order": {"lastName":"asc"}
 * }
 * )
 * @ApiFilter(SearchFilter::class, properties={"invoices.year": "exact"})
 * @ApiFilter(OrderFilter::class)
 */
class Customer
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     *  @Groups({"customers_read", "invoices_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(min=3, minMessage="Le prénom doit faire entre 3 et 255 caractères.", max=255, maxMessage="Le nom doit faire entre 3 et 255 caractères.")
     * @Groups({"customers_read", "invoices_read"})
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Le nom de l'adhérent est obligatoire")
     * @Assert\Length(min=3, minMessage="Le nom doit faire entre 3 et 255 caractères.", max=255, maxMessage="Le nom doit faire entre 3 et 255 caractères.")
     * @Groups({"customers_read", "invoices_read"})
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Email(message="L'adresse email n'est pas valide")
     * @Groups({"customers_read", "invoices_read"})
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"customers_read", "invoices_read"})
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"customers_read", "invoices_read"})
     */
    private $homePhone;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"customers_read", "invoices_read"})
     */
    private $comment;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Invoice", mappedBy="customer")
     * @Groups({"customers_read"})
     * @ApiSubresource
     */
    private $invoices;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"customers_read"})
     */
    private $adress;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"customers_read"})
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"customers_read", "invoices_read"})
     */
    private $town;

    public function __construct()
    {
        $this->invoices = new ArrayCollection();
    }


    /**
     * Permet de récupérer le total du en 2019
     * @Groups({"customers_read", "invoices_read"})
     * @return float
     */
    public function getTotalAmount(): float
    {
        return $TotalAmount = array_reduce($this->invoices->toArray(), function($total, $invoice) {
            return $total + ($invoice->getYear() === "2019" ? 
            ($invoice->getAmount() + $invoice->getSubscription() ): 0);
        }, 0);
       
    }

    /**
     * Permet de récupérer le total payé en 2019
     * @Groups({"customers_read", "invoices_read"})
     * @return float
     */
    public function getTotalPaid(): float
    {
        $TotalPaid = 0;
        return $TotalPaid = array_reduce($this->invoices->toArray(), function($total, $invoice) {
            return $total + ($invoice->getYear() === "2019" ? (
                $invoice->getJanuary()
                + $invoice->getFebruary()
                + $invoice->getMarch()
                + $invoice->getApril()
                + $invoice->getMay()
                + $invoice->getJuly()
                + $invoice->getJune()
                + $invoice->getAugust()
                + $invoice->getSeptember()
                + $invoice->getOctober()
                + $invoice->getNovember()
                + $invoice->getDecember()
            ) : 0);
        }, 0);
       
    }
    /**
     * Reste à payer
     * @Groups({"customers_read", "invoices_read"})
     * @return float
     */
    public function getRest(): float
    {
        return - (array_reduce($this->invoices->toArray(), function($total, $invoice) {
            return $total + ($invoice->getYear() === "2019" ? (
                $invoice->getJanuary()
                + $invoice->getFebruary()
                + $invoice->getMarch()
                + $invoice->getApril()
                + $invoice->getMay()
                + $invoice->getJuly()
                + $invoice->getJune()
                + $invoice->getAugust()
                + $invoice->getSeptember()
                + $invoice->getOctober()
                + $invoice->getNovember()
                + $invoice->getDecember()
            ) : 0);
        }, 0)) + (array_reduce($this->invoices->toArray(), function($total, $invoice) {
            return $total + ($invoice->getYear() === "2019" ? 
            ($invoice->getAmount() + $invoice->getSubscription() ): 0);
        }, 0))
        ;
       
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getHomePhone(): ?string
    {
        return $this->homePhone;
    }

    public function setHomePhone(?string $homePhone): self
    {
        $this->homePhone = $homePhone;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    /**
     * @return Collection|Invoice[]
     */
    public function getInvoices(): Collection
    {
        return $this->invoices;
    }

    public function addInvoice(Invoice $invoice): self
    {
        if (!$this->invoices->contains($invoice)) {
            $this->invoices[] = $invoice;
            $invoice->setCustomer($this);
        }

        return $this;
    }

    public function removeInvoice(Invoice $invoice): self
    {
        if ($this->invoices->contains($invoice)) {
            $this->invoices->removeElement($invoice);
            // set the owning side to null (unless already changed)
            if ($invoice->getCustomer() === $this) {
                $invoice->setCustomer(null);
            }
        }

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(?string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(?string $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getTown(): ?string
    {
        return $this->town;
    }

    public function setTown(?string $town): self
    {
        $this->town = $town;

        return $this;
    }
}
